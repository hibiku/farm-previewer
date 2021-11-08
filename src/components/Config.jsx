import { useState } from "../StateProvider.jsx";
import { levels, orders, orderLimits, mobCaps, mobCapLimits } from "../data.js";

function Level() {
    const [state, { setLevel }] = useState();
    const onChange = (event) => {
        setLevel(Number(event.currentTarget.value));
    };
    return (
        <>
            <label for="level">Level</label>
            <select
                id="level"
                value={state.config.level}
                onChange={onChange}>
                <For each={levels}>{
                    level => <option value={level}>{level}</option>
                }</For>
            </select>
        </>
    );
}

function Order() {
    const [state, { setOrder }] = useState();
    const onChange = (event) => {
        setOrder(Number(event.currentTarget.value));
    };
    const disabled = (order) => {
        const { min, max } = orderLimits[state.config.level];
        return order < min || order > max;
    };
    return (
        <>
            <label for="order">Dimensions</label>
            <select
                id="order"
                value={state.config.order}
                onChange={onChange}>
                <For each={orders}>{
                    order => <option disabled={disabled(order)} value={order}>{`${order} x ${order}`}</option>
                }</For>
            </select>
        </>
    );
}

function MobCap() {
    const [state, { setMobCap }] = useState();
    const onChange = (event) => {
        setMobCap(Number(event.currentTarget.value));
    };
    const disabled = (mobCap) => {
        const { min, max } = mobCapLimits[state.config.level];
        return mobCap < min || mobCap > max;
    };
    return (
        <>
            <label for="mob-cap">Monster capacity</label>
            <select
                id="mob-cap"
                value={state.config.mobCap}
                onChange={onChange}>
                <For each={mobCaps}>{
                    mobCap => <option disabled={disabled(mobCap)} value={mobCap}>{mobCap}</option>
                }</For>
            </select>
        </>
    );
}

function Aufheben() {
    const [state, { toggleAufheben }] = useState();
    const onChange = () => {
        toggleAufheben();
    };
    return (
        <div>
            <input
                type="checkbox"
                id="aufheben"
                checked={state.config.useAufheben}
                onChange={onChange}
            ></input>
            <label for="aufheben">Use Aufheben effect</label>
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