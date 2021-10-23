import { For } from "solid-js";
import { useState } from "../StateProvider.jsx";
import { objectTypes, objectData, objectDisplayTypes } from "../data.js";

function DecorateType() {
    const [state, { setDecorate }] = useState();
    const handleChange = (event) => {
        const type = event.currentTarget.value;
        setDecorate(type, objectData[type].limits[state.config.level].min);
    };
    return (
        <>
            <label for="farm-object-type">Type</label>
            <select
                id="farm-object-type"
                value={state.mode.decorate.type}
                onChange={handleChange}>
                <For each={objectTypes}>{
                    (type) => <option value={type}>{objectDisplayTypes[type]}</option>
                }</For>
            </select>
        </>
    );
}

function DecorateName() {
    const [state, { setDecorate }] = useState();
    const handleChange = (event) => {
        setDecorate(state.mode.decorate.type, event.currentTarget.value);
    };
    return (
        <Show
            when={state.mode.decorate.type !== "road"}>
            <>
                <label for="farm-object-name">Name</label>
                <select
                    id="farm-object-name"
                    value={state.mode.decorate.name}
                    onChange={handleChange}>
                    <For each={objectData[state.mode.decorate.type].names}>{
                        (name, index) => <option
                            disabled={
                                index() < objectData[state.mode.decorate.type].names.indexOf(objectData[state.mode.decorate.type].limits[state.config.level].min) ||
                                index() > objectData[state.mode.decorate.type].names.indexOf(objectData[state.mode.decorate.type].limits[state.config.level].max)
                            }
                            value={name}>{name}</option>
                    }</For>
                </select>
            </>
        </Show>
    );
}

function Autofill() {
    const [state, { setGrid }] = useState();
    const handleChange = () => {
        const useAutofill = state.config.useAutofill;
        if (useAutofill) {
            setGrid({
                ...state.config,
                useAutofill: !useAutofill
            }, (_, index) => {
                const cell = state.cells[index];
                if (cell.type === "road") {
                    return { ...cell, type: "", name: "" };
                }
                return { ...cell };
            });
        } else {
            setGrid({
                ...state.config,
                useAutofill: !useAutofill
            }, (_, index) => {
                const cell = state.cells[index];
                if (!cell.type) {
                    return { ...cell, type: "road", name: "" };
                }
                return { ...cell };
            });
        }
    };
    return (
        <div>
            <input
                type="checkbox"
                id="farm-autofill"
                checked={state.config.useAutofill}
                onChange={handleChange}
            ></input>
            <label for="farm-autofill">Autofill roads</label>
        </div>
    );
}

function Decorate() {
    return (
        <>
            <DecorateType />
            <DecorateName />
            <Autofill />
        </>
    );
}

export default Decorate;