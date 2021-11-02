import { useState } from "../StateProvider.jsx";
import { objects } from "../data.js";

function DecorateType() {
    const [state, { onDecorateTypeChange }] = useState();
    const decorateTypes = Object.keys(objects).filter(type => {
        return type !== "free";
    });
    return (
        <>
            <label for="decorate-type">Type</label>
            <select
                id="decorate-type"
                value={state.decorate.type}
                onChange={onDecorateTypeChange}>
                <For each={decorateTypes}>{
                    type => <option value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                }</For>
            </select>
        </>
    );
}

function DecorateName() {
    const [state, { onDecorateNameChange }] = useState();
    const names = () => {
        const { names, data } = objects[state.decorate.type];
        return names.filter(name => !data[name].fixed);
    };
    const disabled = name => {
        return state.config.level < objects[state.decorate.type].data[name].level
    };
    return (
        <Show
            when={state.decorate.type !== "road"}>
            <>
                <label for="decorate-name">Name</label>
                <select
                    id="decorate-name"
                    disabled={!state.decorate.name}
                    value={state.decorate.name}
                    onChange={onDecorateNameChange}>
                    <For each={names()}>{
                        name => <option disabled={disabled(name)} value={name}>{name}</option>
                    }</For>
                </select>
            </>
        </Show>
    );
}

function Autofill() {
    const [state, { onAutofillChange }] = useState();
    return (
        <div>
            <input
                type="checkbox"
                id="autofill"
                checked={state.config.useAutofill}
                onChange={onAutofillChange}
            ></input>
            <label for="autofill">Autofill roads</label>
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