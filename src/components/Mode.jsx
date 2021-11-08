import { Switch, Match } from "solid-js";
import { useState } from "../StateProvider.jsx";
import { objects, aufhebenWaru } from "../data.js";

function Inspect() {
    const [state] = useState();
    return (
        <table>
            <caption>Cell properties</caption>
            <Switch fallback={
                <tbody>
                    <tr>
                        <th>Type</th>
                        <td>Free cell</td>
                    </tr>
                </tbody>
            }>
                <Match when={state.grid[state.inspect.root].object.type === "road"}>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>Road</td>
                        </tr>
                        <tr>
                            <th>Connected to house</th>
                            <Show
                                when={state.grid[state.inspect.root].network.connected}
                                fallback={<td>No</td>}
                            >
                                <td>Yes</td>
                            </Show>
                        </tr>
                    </tbody>
                </Match>
                <Match when={state.grid[state.inspect.root].object.type === "decor"}>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>Decor</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{state.grid[state.inspect.root].object.name}</td>
                        </tr>
                        <tr>
                            <th>Adjacent roads (in-network)</th>
                            <td>{state.grid[state.inspect.root].network.paths}</td>
                        </tr>
                        <tr>
                            <th>Aesthetic points</th>
                            <td>{`${state.grid[state.inspect.root].object.decor} (+${state.grid[state.inspect.root].network.decor})`}</td>
                        </tr>
                    </tbody>
                </Match>
                <Match when={state.grid[state.inspect.root].object.type === "building"}>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>Building</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{state.grid[state.inspect.root].object.name}</td>
                        </tr>
                        <tr>
                            <th>Adjacent roads (in-network)</th>
                            <td>{state.grid[state.inspect.root].network.paths}</td>
                        </tr>
                        <tr>
                            <th>Production rate (W/10 mins)</th>
                            <Show
                                when={state.config.useAufheben}
                                fallback={<td>{`${state.grid[state.inspect.root].object.waru} (+${state.grid[state.inspect.root].network.waru})`}</td>}
                            >
                                <td>{`${state.grid[state.inspect.root].object.waru} (+${state.grid[state.inspect.root].network.waru}) (+${(state.grid[state.inspect.root].object.waru > 0 && state.grid[state.inspect.root].object.banked > 0) ? aufhebenWaru : 0})`}</td>
                            </Show>
                        </tr>
                        <tr>
                            <th>Max capacity (W)</th>
                            <td>{`${state.grid[state.inspect.root].object.banked} (+${state.grid[state.inspect.root].network.banked})`}</td>
                        </tr>
                        <tr>
                            <th>Aesthetic points</th>
                            <td>{state.grid[state.inspect.root].object.decor}</td>
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
    const decorateTypes = Object.keys(objects).filter(type => {
        return type !== "free";
    });
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