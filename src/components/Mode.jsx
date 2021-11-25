import { Switch, Match } from "solid-js";
import { useState } from "../StateProvider.jsx";
import { objects } from "../data.js";

function Inspect() {
    const [state] = useState();
    return (
        <table>
            <caption>Tile properties</caption>
            <Switch fallback={
                <tbody>
                    <tr>
                        <th>Type</th>
                        <td>Blank tile</td>
                    </tr>
                </tbody>
            }>
                <Match when={state.tileData.type === "road"}>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>Road</td>
                        </tr>
                        <tr>
                            <th>Connected to house</th>
                            <Show
                                when={state.tileData.paths > 0}
                                fallback={<td>No</td>}
                            >
                                <td>Yes</td>
                            </Show>
                        </tr>
                    </tbody>
                </Match>
                <Match when={state.tileData.type === "decor"}>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>Decor</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{state.tileData.name}</td>
                        </tr>
                        <tr>
                            <th>Adjacent roads (in-network)</th>
                            <td>{state.tileData.paths}</td>
                        </tr>
                        <tr>
                            <th>Aesthetic points</th>
                            <td>{`${state.tileData.decor} (+${state.tileData.bonusDecor})`}</td>
                        </tr>
                    </tbody>
                </Match>
                <Match when={state.tileData.type === "building"}>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>Building</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{state.tileData.name}</td>
                        </tr>
                        <tr>
                            <th>Adjacent roads (in-network)</th>
                            <td>{state.tileData.paths}</td>
                        </tr>
                        <tr>
                            <th>Production rate (W/10 mins)</th>
                            <td>{`${state.tileData.waru} (+${state.tileData.bonusWaru}) (+${state.tileData.finalWaru})`}</td>
                        </tr>
                        <tr>
                            <th>Storage capacity (W)</th>
                            <td>{`${state.tileData.banked} (+${state.tileData.bonusBanked})`}</td>
                        </tr>
                        <tr>
                            <th>Aesthetic points</th>
                            <td>{state.tileData.decor}</td>
                        </tr>
                    </tbody>
                </Match>
            </Switch>
        </table>
    );
}

function DecorateType() {
    const [state, { setDecorateType }] = useState();
    const onChange = (event) => {
        setDecorateType(event.currentTarget.value);
    };
    const decorateTypes = Object.keys(objects).filter(type => type !== "blank");
    return (
        <>
            <label for="decorate-type">Type</label>
            <select
                id="decorate-type"
                value={state.decorate.type}
                onChange={onChange}>
                <For each={decorateTypes}>{
                    type => <option value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                }</For>
            </select>
        </>
    );
}

function DecorateName() {
    const [state, { setDecorateName }] = useState();
    const onChange = (event) => {
        setDecorateName(event.currentTarget.value);
    };
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
                    onChange={onChange}>
                    <For each={names()}>{
                        name => <option disabled={disabled(name)} value={name}>{name}</option>
                    }</For>
                </select>
            </>
        </Show>
    );
}

function Autofill() {
    const [state, { toggleAutofill }] = useState();
    const onChange = () => {
        toggleAutofill();
    };
    return (
        <div>
            <input
                type="checkbox"
                id="autofill"
                checked={state.config.useAutofill}
                onChange={onChange}
            ></input>
            <label for="autofill">Autofill roads</label>
        </div>
    );
}

function Mode() {
    const [state, { setMode }] = useState();
    const onClick = (data) => {
        setMode(data.mode);
    };
    return (
        <fieldset>
            <legend>{`Mode: ${state.mode}`}</legend>
            <div classList={{ [state.mode]: true }}>
                <Show
                    when={state.mode === "inspect"}
                    fallback={
                        <>
                            <DecorateType />
                            <DecorateName />
                            <Autofill />
                            <button type="button" onClick={[onClick, { mode: "inspect" }]}>Switch to Inspect mode</button>
                        </>
                    }
                >
                    <Inspect />
                    <button type="button" onClick={[onClick, { mode: "decorate" }]}>Switch to Decorate mode</button>
                </Show>
            </div>
        </fieldset>
    );
}

export default Mode;