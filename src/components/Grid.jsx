import { useState } from "../StateProvider.jsx";

function Remove() {
    const [state, { onRemoveClick }] = useState();
    const disabled = () => {
        const object = state.grid[state.inspect.root].object;
        return object.type === "free" || object.fixed;
    };
    return (
        <button type="button" disabled={disabled()} onClick={onRemoveClick}>Remove</button>
    );
}

function Reset() {
    const [_, { onResetClick }] = useState();
    return (
        <button type="button" onClick={onResetClick}>Reset</button>
    );
}

function Grid() {
    const [state, { onGridClick }] = useState();
    return (
        <fieldset>
            <legend>Grid</legend>
            <div class="grid">
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
                                    onClick={[onGridClick, { cell }]}
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
                    <Remove />
                    <Reset />
                </div>
            </div>
        </fieldset>
    );
}

export default Grid;