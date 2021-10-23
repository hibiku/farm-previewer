import { useState } from "../StateProvider.jsx";
import { objectData } from "../data.js";

function Remove() {
    const [state, { setGrid }] = useState();
    const handleClick = () => {
        const cell = state.cells[state.mode.inspect.rootIndex];
        if (!cell.type || cell.type === "myHouse") {
            return;
        }
        const { order } = objectData[cell.type].props[cell.name];
        const { row, col } = cell;
        const upperRow = row + order - 1;
        const upperCol = col + order - 1;
        const indices = [];
        for (let r = row; r <= upperRow; r++) {
            for (let c = col; c <= upperCol; c++) {
                const index = r * state.config.order + c;
                indices.push(index);
            }
        }
        setGrid({ ...state.config }, (_, index) => {
            if (indices.includes(index)) {
                return {
                    ...state.cells[index],
                    type: state.config.useAutofill ? "road" : "",
                    name: "",
                    rootIndex: index
                }
            }
            return { ...state.cells[index] };
        });
    };
    return (
        <Show when={state.mode.type === "inspect"}>
            <button
                type="button"
                disabled={ !state.cells[state.mode.inspect.rootIndex].type || state.cells[state.mode.inspect.rootIndex].type === "myHouse" }
                onClick={handleClick}>Remove</button>
        </Show>
    );
}

function Reset() {
    const [state, { setGrid }] = useState();
    const handleClick = () => {
        setGrid({ ...state.config });
    };
    return (
        <button type="button" onClick={handleClick}>Reset</button>
    );
}

function Grid() {
    const [state, { setInspect, setGrid }] = useState();
    const handleClick = (data) => {
        if (state.mode.type === "inspect") {
            setInspect(state.cells[data.index].rootIndex);
        } else {
            const { type, name } = state.mode.decorate;
            const { order, space, limit } = objectData[type].props[name];
            if (type === "building" || type === "decor") {
                if (!name || state.space < space) {
                    return;
                }
                const quantity = Object.fromEntries(state.objects[type])[name] || 0;
                if (limit > 0 && (quantity + 1 > limit)) {
                    return;
                }
            }
            const { row, col } = data;
            const upperRow = row + order - 1;
            const upperCol = col + order - 1;
            if (upperRow >= state.config.order || upperCol >= state.config.order) {
                return;
            }
            const indices = [];
            for (let r = row; r <= upperRow; r++) {
                for (let c = col; c <= upperCol; c++) {
                    const index = r * state.config.order + c;
                    switch (state.cells[index].type) {
                        case "road":
                            indices.push(index);
                            break;
                        case "":
                            indices.push(index);
                            break;
                        default:
                            return;
                    }
                }
            }
            if (indices.length !== space) {
                return;
            }
            setInspect(indices[0]);
            setGrid({ ...state.config }, (_, index) => {
                if (indices.includes(index)) {
                    return {
                        ...state.cells[index],
                        type,
                        name,
                        rootIndex: indices[0]
                    }
                }
                return { ...state.cells[index] };
            });
        }
    };
    return (
        <fieldset>
            <legend>Grid</legend>
            <div class="grid">
                <div class="grid-outer">
                    <div
                        class="grid-inner"
                        style={{
                            "grid-template-columns": "repeat(" + state.config.order + ", auto)",
                            "grid-template-rows": "repeat(" + state.config.order + ", auto)"
                        }}>
                        <For each={state.cells}>
                            {
                                (cell, index) => {
                                    const { row, col } = cell;
                                    const props = objectData[cell.type].props[cell.name];
                                    const rootCell = state.cells[cell.rootIndex];
                                    const lowerRow = rootCell.row;
                                    const lowerCol = rootCell.col;
                                    const upperRow = rootCell.row + props.order - 1;
                                    const upperCol = rootCell.col + props.order - 1;
                                    return (<div
                                        style={{
                                            "border-color": (state.mode.type === "inspect" && cell.rootIndex === state.mode.inspect.rootIndex) ? "red" : "black",
                                            "border-top-style": row === lowerRow ? "solid" : "none",
                                            "border-right-style": col === upperCol ? "solid" : "none",
                                            "border-bottom-style": row === upperRow ? "solid" : "none",
                                            "border-left-style": col === lowerCol ? "solid" : "none",
                                        }}
                                        classList={{
                                            "my-house": cell.type === "myHouse",
                                            building: cell.type === "building",
                                            decor: cell.type === "decor",
                                            "road-in-network": cell.type === "road" && cell.inNetwork,
                                            "road-out-network": cell.type === "road" && !cell.inNetwork,
                                            "grid-cell": true,
                                        }}
                                        onClick={[handleClick, {
                                            index: index(),
                                            row,
                                            col
                                        }]}
                                    ></div>);
                                }
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