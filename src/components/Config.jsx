import { For } from "solid-js";
import { useState } from "../StateProvider.jsx";
import { levels, orders, orderLimits, mobCaps, mobCapLimits, objectTypes, objectData } from "../data.js";

function Level() {
    const [state, { setInspect, setDecorate, setGrid }] = useState();
    const handleChange = (event) => {
        const level = event.currentTarget.value;
        setDecorate(objectTypes[0], objectData[objectTypes[0]].limits[level].min);
        const oldOrder = state.config.order;
        const newOrder = orderLimits[level].max;
        const newMobCap = Math.min(Math.max(state.config.mobCap, mobCapLimits[level].min), mobCapLimits[level].max);
        if (oldOrder > newOrder) {
            const inspectIndex = state.mode.inspect.rootIndex;
            const inspectRow = state.cells[inspectIndex].row;
            const inspectCol = state.cells[inspectIndex].col;
            setInspect((inspectRow >= newOrder || inspectCol >= newOrder) ? 0 : inspectRow * newOrder + inspectCol);

            const rootIndices = new Map();
            const indices = [];
            state.cells.forEach((cell, index) => {
                if ((cell.row >= newOrder || cell.col >= newOrder) && cell.type && cell.rootIndex !== index && !rootIndices.has(cell.rootIndex)) {
                    const { row, col } = state.cells[cell.rootIndex];
                    if (row < newOrder && col < newOrder) {
                        const { order } = objectData[cell.type].props[cell.name];
                        const upperRow = Math.min(row + order - 1, newOrder - 1);
                        const upperCol = Math.min(col + order - 1, newOrder - 1);
                        for (let r = row; r <= upperRow; r++) {
                            for (let c = col; c <= upperCol; c++) {
                                indices.push(r * newOrder + c);
                            }
                        }
                    }
                    rootIndices.set(cell.rootIndex, true);
                }
            });
            setGrid({
                ...state.config,
                level,
                order: newOrder,
                mobCap: newMobCap
            }, (_, index) => {
                const newRow = Math.floor(index / newOrder);
                const newCol = Math.floor(index % newOrder);
                if (indices.includes(index)) {
                    return {
                        row: newRow,
                        col: newCol,
                        type: state.config.useAutofill ? "road" : "",
                        name: "",
                        rootIndex: index
                    };
                }
                const oldCell = state.cells[newRow * oldOrder + newCol];
                const oldRootIndex = oldCell.rootIndex;
                const oldRootRow = Math.floor(oldRootIndex / oldOrder);
                const oldRootCol = Math.floor(oldRootIndex % oldOrder);
                return {
                    ...oldCell,
                    row: newRow,
                    col: newCol,
                    rootIndex: oldRootRow * newOrder + oldRootCol
                };
            });
        } else {
            setGrid({
                ...state.config,
                level,
                mobCap: newMobCap
            }, (_, index) => ({ ...state.cells[index] }));
        }
    };
    return (
        <>
            <label for="farm-level">Level</label>
            <select
                id="farm-level"
                value={state.config.level}
                onChange={handleChange}>
                <For each={levels}>{
                    (level) => <option value={level}>{level}</option>
                }</For>
            </select>
        </>
    );
}

function Order() {
    const [state, { setInspect, setGrid }] = useState();
    const handleChange = (event) => {
        const oldOrder = state.config.order;
        const newOrder = event.currentTarget.value;
        const inspectIndex = state.mode.inspect.rootIndex;
        const inspectRow = state.cells[inspectIndex].row;
        const inspectCol = state.cells[inspectIndex].col;
        const newInspectIndex = inspectRow * newOrder + inspectCol;
        if (oldOrder > newOrder) {
            setInspect((inspectRow >= newOrder || inspectCol >= newOrder) ? 0 : newInspectIndex);
            const rootIndices = new Map();
            const indices = [];
            state.cells.forEach((cell, index) => {
                if ((cell.row >= newOrder || cell.col >= newOrder) && cell.type && cell.rootIndex !== index && !rootIndices.has(cell.rootIndex)) {
                    const { row, col } = state.cells[cell.rootIndex];
                    if (row < newOrder && col < newOrder) {
                        const { order } = objectData[cell.type].props[cell.name];
                        const upperRow = Math.min(row + order - 1, newOrder - 1);
                        const upperCol = Math.min(col + order - 1, newOrder - 1);
                        for (let r = row; r <= upperRow; r++) {
                            for (let c = col; c <= upperCol; c++) {
                                indices.push(r * newOrder + c);
                            }
                        }
                    }
                    rootIndices.set(cell.rootIndex, true);
                }
            });
            setGrid({ ...state.config, order: newOrder }, (_, index) => {
                const newRow = Math.floor(index / newOrder);
                const newCol = Math.floor(index % newOrder);
                if (indices.includes(index)) {
                    return {
                        row: newRow,
                        col: newCol,
                        type: state.config.useAutofill ? "road" : "",
                        name: "",
                        rootIndex: index
                    };
                }
                const oldCell = state.cells[newRow * oldOrder + newCol];
                const oldRootIndex = oldCell.rootIndex;
                const oldRootRow = Math.floor(oldRootIndex / oldOrder);
                const oldRootCol = Math.floor(oldRootIndex % oldOrder);
                return {
                    ...oldCell,
                    row: newRow,
                    col: newCol,
                    rootIndex: oldRootRow * newOrder + oldRootCol
                };
            });
        } else {
            setInspect(newInspectIndex >= oldOrder ** 2 ? 0 : newInspectIndex);
            setGrid({ ...state.config, order: newOrder }, (_, index) => {
                const newRow = Math.floor(index / newOrder);
                const newCol = Math.floor(index % newOrder);
                if (newRow < oldOrder && newCol < oldOrder) {
                    const oldCell = state.cells[newRow * oldOrder + newCol];
                    const oldRootIndex = oldCell.rootIndex;
                    const oldRootRow = Math.floor(oldRootIndex / oldOrder);
                    const oldRootCol = Math.floor(oldRootIndex % oldOrder);
                    return {
                        ...oldCell,
                        row: newRow,
                        col: newCol,
                        rootIndex: oldRootRow * newOrder + oldRootCol
                    };
                }
                return {
                    row: newRow,
                    col: newCol,
                    type: state.config.useAutofill ? "road" : "",
                    name: "",
                    rootIndex: index
                };
            });
        }
    };
    return (
        <>
            <label for="farm-order">Dimensions</label>
            <select
                id="farm-order"
                value={state.config.order}
                onChange={handleChange}>
                <For each={orders}>{
                    (order, index) => <option
                        disabled={
                            index() < orders.indexOf(orderLimits[state.config.level].min) ||
                            index() > orders.indexOf(orderLimits[state.config.level].max)
                        }
                        value={order}>{order + " x " + order}</option>
                }</For>
            </select>
        </>
    );
}

function MobCap() {
    const [state, { setGrid }] = useState();
    const handleChange = (event) => {
        const mobCap = event.currentTarget.value;
        setGrid({ ...state.config, mobCap }, (_, index) => ({ ...state.cells[index] }));
    };
    return (
        <>
            <label for="farm-mob-cap">Monster capacity</label>
            <select
                id="farm-mob-cap"
                value={state.config.mobCap}
                onChange={handleChange}>
                <For each={mobCaps}>{
                    (mobCap, index) => <option
                        disabled={
                            index() < mobCaps.indexOf(mobCapLimits[state.config.level].min) ||
                            index() > mobCaps.indexOf(mobCapLimits[state.config.level].max)
                        }
                        value={mobCap}>{mobCap}</option>
                }</For>
            </select>
        </>
    );
}

function Aufheben() {
    const [state, { setGrid }] = useState();
    const handleChange = () => {
        setGrid({ ...state.config, useAufheben: !state.config.useAufheben }, (_, index) => ({ ...state.cells[index] }));
    };
    return (
        <div>
            <input
                type="checkbox"
                id="farm-aufheben"
                checked={state.config.useAufheben}
                onChange={handleChange}
            ></input>
            <label for="farm-aufheben">Use Aufheben effect</label>
        </div>
    );
}

function Config() {
    return (
        <fieldset>
            <legend>Config</legend>
            <div class="config">
                <Level />
                <Order />
                <MobCap />
                <Aufheben />
            </div>
        </fieldset>
    );
}

export default Config;