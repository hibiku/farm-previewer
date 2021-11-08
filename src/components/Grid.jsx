import { batch, createSignal, createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import { useState } from "../StateProvider.jsx";

function Presets({ alert, setAlert }) {
    const [state, { loadPreset, deletePreset, createPreset, updateChart }] = useState();
    const storePresets = (presets) => {
        try {
            window.localStorage.setItem("presets", presets);
        } catch(err) {
            return err.message;
        }
    };

    const [presetIndex, setPresetIndex] = createSignal(-1);
    const onChange = (event) => {
        setPresetIndex(Number(event.currentTarget.value));
    };
    const onLoadClick = () => {
        loadPreset(presetIndex());
        updateChart();
        setPresetIndex(-1);
    };
    const onDeleteClick = () => {
        const index = presetIndex();
        const { title } = state.presets[index];
        deletePreset(index);
        updateChart();
        const err = storePresets(JSON.stringify(state.presets));
        if (err) {
            batch(() => {
                setAlert("status", "failure");
                setAlert("message", `Unable to delete preset "${title}" from local storage: ${err}.`);
            });
        } else {
            batch(() => {
                setAlert("status", "success");
                setAlert("message", `Deleted preset "${title}" from local storage.`);
            });
        }
        setPresetIndex(-1);
    };

    const [newTitle, setNewTitle] = createSignal("");
    const onInput = (event) => {
        setNewTitle(event.currentTarget.value);
    };
    const onCreateClick = () => {
        const title = newTitle();
        createPreset(title);
        updateChart();
        const err = storePresets(JSON.stringify(state.presets));
        if (err) {
            batch(() => {
                setAlert("status", "failure");
                setAlert("message", `Unable to save preset "${title}" to local storage: ${err}`);
            });
        } else {
            batch(() => {
                setAlert("status", "success");
                setAlert("message", `Saved preset "${title}" to local storage.`);
            });
        }
        setPresetIndex(-1);
        setNewTitle("");
    };
    
    return (
        <>
            <div>
                <select
                    value={presetIndex()}
                    disabled={!state.presets.length}
                    onChange={onChange}>
                    <option value={-1} disabled hidden>Choose...</option>
                    <Index each={state.presets}>{
                        (preset, index) => <option value={index}>{preset().title}</option>
                    }</Index>
                </select>
                <button
                    type="button"
                    disabled={presetIndex() < 0}
                    onClick={onLoadClick}
                >Load</button>
                <button
                    type="button"
                    disabled={presetIndex() < 0}
                    onClick={onDeleteClick}
                >Delete</button>
            </div>
            <div>
                <input
                    type="text"
                    value={newTitle()}
                    required
                    placeholder="Enter a title..."
                    onInput={onInput}
                />
                <button
                    type="button"
                    disabled={!newTitle()}
                    onClick={onCreateClick}
                >Create</button>
            </div>
            <Show when={alert.status}>
                <div
                    classList={{
                        alert: true,
                        [alert.status]: true
                    }}
                >
                    <strong>{`${alert.status}!`}</strong>{alert.message}
                </div>
            </Show>
        </>
    );
}

function Remove({ setAlert }) {
    const [state, { removeObject }] = useState();
    const disabled = () => {
        const object = state.grid[state.inspect.root].object;
        return object.type === "free" || object.fixed;
    };
    const onClick = () => {
        const err = removeObject();
        if (err) {
            batch(() => {
                setAlert("status", "failure");
                setAlert("message", `Unable to remove object: ${err}.`);
            });
        }
    };
    return (
        <button type="button" disabled={disabled()} onClick={onClick}>Remove</button>
    );
}

function Reset() {
    const [_, { resetGrid }] = useState();
    const onClick = () => {
        resetGrid();
    };
    return (
        <button type="button" onClick={onClick}>Reset</button>
    );
}

function Grid() {
    const [state, { setInspectRoot, insertObject }] = useState();
    const [alert, setAlert] = createStore({
        status: "info",
        message: `Found ${state.presets.length} presets in local storage.`
    });
    createEffect(() => {
        if (alert.status && alert.message) {
            setTimeout(() => {
                batch(() => {
                    setAlert("status", "");
                    setAlert("message", "");
                });
            }, 3000);
        }
    });
    const onClick = ({ cell }) => {
        if (state.mode === "inspect") {
            setInspectRoot(cell.position.root);
        } else if (state.mode === "decorate") {
            const err = insertObject(cell.position);
            if (err) {
                batch(() => {
                    setAlert("status", "failure");
                    setAlert("message", `Unable to insert object: ${err}.`);
                });
            }
        }
    };
    return (
        <fieldset>
            <legend>Grid</legend>
            <div class="grid">
                <div class="grid-presets">
                    <Presets alert={alert} setAlert={setAlert} />
                </div>
                <div class="grid-outer">
                    <div
                        class="grid-inner"
                        style={{
                            "grid-template-columns": `repeat(${state.config.order}, auto)`,
                            "grid-template-rows": `repeat(${state.config.order}, auto)`
                        }}>
                        <For each={state.grid}>
                            {
                                cell => <div
                                    style={{
                                        "border-color": cell.position.root === state.inspect.root ? "red" : "black",
                                        "border-top-style": cell.border.top ? "solid" : "none",
                                        "border-right-style": cell.border.right ? "solid" : "none",
                                        "border-bottom-style": cell.border.bottom ? "solid" : "none",
                                        "border-left-style": cell.border.left ? "solid" : "none",
                                    }}
                                    classList={{
                                        "my-house": cell.position.root === 0,
                                        building: cell.object.type === "building",
                                        decor: cell.object.type === "decor",
                                        "road-in-network": cell.object.type === "road" && cell.network.connected,
                                        "road-out-network": cell.object.type === "road" && !cell.network.connected,
                                        "grid-cell": true,
                                    }}
                                    onClick={[onClick, { cell }]}
                                ></div>
                            }
                        </For>
                    </div>
                </div>
                <div class="grid-legend">
                    <div>
                        <div class="box my-house"></div>
                        <div>My House</div>
                    </div>
                    <div>
                        <div class="box building"></div>
                        <div>Building</div>
                    </div>
                    <div>
                        <div class="box decor"></div>
                        <div>Decor</div>
                    </div>
                    <div>
                        <div class="box road-in-network"></div>
                        <div>Road (in-network)</div>
                    </div>
                    <div>
                        <div class="box road-out-network"></div>
                        <div>Road (out-network)</div>
                    </div>
                </div>
                <div class="grid-control">
                    <Remove setAlert={setAlert} />
                    <Reset />
                </div>
            </div>
        </fieldset>
    );
}

export default Grid;