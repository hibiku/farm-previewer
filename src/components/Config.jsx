import { useState } from "../StateProvider.jsx";
import { levels, orders, orderLimits, mobCaps, mobCapLimits } from "../data.js";

function Level() {
    const [state, { onLevelChange }] = useState();
    return (
        <>
            <label for="level">Level</label>
            <select
                id="level"
                value={state.config.level}
                onChange={onLevelChange}>
                <For each={levels}>{
                    level => <option value={level}>{level}</option>
                }</For>
            </select>
        </>
    );
}

function Order() {
    const [state, { onOrderChange }] = useState();
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
                onChange={onOrderChange}>
                <For each={orders}>{
                    order => <option disabled={disabled(order)} value={order}>{`${order} x ${order}`}</option>
                }</For>
            </select>
        </>
    );
}

function MobCap() {
    const [state, { onMobCapChange }] = useState();
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
                onChange={onMobCapChange}>
                <For each={mobCaps}>{
                    mobCap => <option disabled={disabled(mobCap)} value={mobCap}>{mobCap}</option>
                }</For>
            </select>
        </>
    );
}

function Aufheben() {
    const [state, { onAufhebenChange }] = useState();
    return (
        <div>
            <input
                type="checkbox"
                id="aufheben"
                checked={state.config.useAufheben}
                onChange={onAufhebenChange}
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