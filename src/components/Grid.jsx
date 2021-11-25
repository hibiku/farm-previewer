import { batch, createSignal, createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import { useState } from "../StateProvider.jsx";
import { myHouseRoot } from "../data.js";

function Presets({ alert, setAlert }) {
    const [state, { loadPreset, deletePreset, createPreset }] = useState();
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
        setPresetIndex(-1);
    };
    const onDeleteClick = () => {
        const index = presetIndex();
        const { title } = state.presets[index];
        deletePreset(index);
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
        const err = storePresets(JSON.stringify(state.presets.map(({ title, config, tiling }) => ({
            title,
            config,
            tiling
        }))));
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
    const disabled = () => state.grid[state.inspect.root].data.fixed;
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

function Clear() {
    const [_, { clearGrid }] = useState();
    const onClick = () => {
        clearGrid();
    };
    return (
        <button type="button" onClick={onClick}>Clear</button>
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
    const tileClassList = ({ data, position }) => {
        const classList = {
            "grid-tile": true,
            "grid-tile-inspect": position.root === state.inspect.root
        };
        if (data.type === "road") {
            classList[state.summary.network.areConnected(myHouseRoot, position.index) ? "road-in-network" : "road-out-network"] = true;
        }
        return classList;
    };
    const tileStyle = ({ data, position }) => {
        if (data.type === "decor" || data.type === "building") {
            const style = {
                ["background-color"]: state.summary.tiling[data.type].pairs[data.name].backgroundColor
            };
            const { row, column } = state.grid[position.root].position;
            if (position.row !== row) {
                style["border-top-style"] = "none";
            }
            if (position.column !== column + data.order - 1) {
                style["border-right-style"] = "none";
            }
            if (position.row !== row + data.order - 1) {
                style["border-bottom-style"] = "none";
            }
            if (position.column !== column) {
                style["border-left-style"] = "none";
            }
            return style;
        }
    };
    const onClick = ({ tile }) => {
        if (state.mode === "inspect") {
            setInspectRoot(tile.position.root);
        } else if (state.mode === "decorate") {
            const err = insertObject(tile.position);
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
                                tile => <div
                                    classList={tileClassList(tile)}
                                    style={tileStyle(tile)}
                                    onClick={[onClick, { tile }]}
                                />
                            }
                        </For>
                    </div>
                </div>
                <div class="grid-legend">
                    <For each={state.summary.tiling.building.names}>{
                        name => <div>
                            <div class="grid-legend-item" style={{ "background-color": state.summary.tiling.building.pairs[name].backgroundColor }} />
                            <div>{name}</div>
                        </div>
                    }</For>

                    <For each={state.summary.tiling.decor.names}>{
                        name => <div>
                            <div class="grid-legend-item" style={{ "background-color": state.summary.tiling.decor.pairs[name].backgroundColor }} />
                            <div>{name}</div>
                        </div>
                    }</For>
                    <Show when={state.summary.tiling.road.count.inNetwork > 0}>
                        <div>
                            <div class="grid-legend-item road-in-network" />
                            <div>Road (in-network)</div>
                        </div>
                    </Show>
                    <Show when={state.summary.tiling.road.count.outNetwork > 0}>
                        <div>
                            <div class="grid-legend-item road-out-network" />
                            <div>Road (out-network)</div>
                        </div>
                    </Show>
                    <Show when={state.summary.tiling.blank.roots.length > 0}>
                        <div>
                            <div class="grid-legend-item" />
                            <div>Blank tile</div>
                        </div>
                    </Show>
                </div>
                <div class="grid-control">
                    <Remove setAlert={setAlert} />
                    <Clear />
                </div>
            </div>
        </fieldset>
    );
}

export default Grid;