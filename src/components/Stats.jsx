import { createSignal } from "solid-js";
import { useState } from "../StateProvider.jsx";

function Objects() {
    const [state] = useState();
    return (
        <table>
            <caption>Object count</caption>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <For each={state.summary.roots.building}>
                    {
                        ({ name, list }) => <tr>
                            <td>Building</td>
                            <td>{name}</td>
                            <td>{list.length}</td>
                        </tr>
                    }
                </For>
                <For each={state.summary.roots.decor}>
                    {
                        ({ name, list }) => <tr>
                            <td>Decor</td>
                            <td>{name}</td>
                            <td>{list.length}</td>
                        </tr>
                    }
                </For>
                <Show when={state.summary.count.inNetwork > 0}>
                    <tr>
                        <th colspan={2}>Road (in-network)</th>
                        <td colspan={1}>{state.summary.count.inNetwork}</td>
                    </tr>
                </Show>
                <Show when={state.summary.count.outNetwork > 0}>
                    <tr>
                        <th colspan={2}>Road (out-network)</th>
                        <td colspan={1}>{state.summary.count.outNetwork}</td>
                    </tr>
                </Show>
                <tr>
                    <th colspan={2}>Free cells</th>
                    <td colspan={1}>{state.summary.count.free}</td>
                </tr>
            </tbody>
        </table>
    );
}

function Beauty() {
    const [state] = useState();
    return (
        <table>
            <caption>Beauty effects</caption>
            <thead>
                <tr>
                    <th>Combine Result Choices</th>
                    <th>Building Max Capacity (W)</th>
                    <th>Shop Discount</th>
                    <th>Special Merchant Visit</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{`+${state.summary.beauty.choices}%`}</td>
                    <td>{`+${state.summary.beauty.banked}`}</td>
                    <td>{`${state.summary.beauty.discount}%`}</td>
                    <td>{`+${state.summary.beauty.visit}%`}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan={2}>Total aesthetic points</th>
                    <td colspan={2}>{state.summary.beauty.total}</td>
                </tr>
                <tr>
                    <th colspan={2}>Points to next threshold</th>
                    <td colspan={2}>{state.summary.beauty.next}</td>
                </tr>
            </tfoot>
        </table>
    );
}

function Production() {
    const [state] = useState();
    const [truncated, setTruncated] = createSignal(true);
    const onClick = () => {
        setTruncated(!truncated());
    };
    return (
        <>
            <table>
                <caption>Waru production</caption>
                <thead>
                    <tr>
                        <th>Time (mins)</th>
                        <th>Total (W)</th>
                        <th>Marginal (W)</th>
                        <th>Average (W)</th>
                    </tr>
                </thead>
                <tbody>
                    <Show when={truncated() && state.summary.production.lastOptimalCycle > 0}>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                    </Show>
                    <For each={state.summary.production.products.slice(truncated() ? state.summary.production.lastOptimalCycle : 0)}>
                        {
                            product => <tr>
                                <td>{10 * product.cycle}</td>
                                <td>{product.total}</td>
                                <td>{product.marginal}</td>
                                <td>{product.average}</td>
                            </tr>
                        }
                    </For>
                </tbody>
                <tfoot>
                    <tr>
                        <Show when={state.summary.production.lastOptimalCycle > 0}>
                            <th colspan={4}>
                                <button type="button" onClick={onClick}>
                                    {(truncated() ? "Expand" : "Collapse") + " rows"}
                                </button>
                            </th>
                        </Show>
                    </tr>
                    <tr>
                        <th colspan={2}>Total yield (W)</th>
                        <td colspan={2}>{state.summary.production.products[state.summary.production.products.length - 1].total}</td>
                    </tr>
                    <tr>
                        <th colspan={2}>Time until total yield (mins)</th>
                        <td colspan={2}>{10 * (state.summary.production.products.length - 1)}</td>
                    </tr>
                    <tr>
                        <th colspan={2}>Max yield rate (W/10 mins)</th>
                        <td colspan={2}>{state.summary.production.products[state.summary.production.lastOptimalCycle].marginal}</td>
                    </tr>
                    <tr>
                        <th colspan={2}>Time until diminishing returns (mins)</th>
                        <td colspan={2}>{10 * state.summary.production.lastOptimalCycle}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}

function Stats() {
    return (
        <fieldset>
            <legend>Stats</legend>
            <div class="stats">
                <Objects />
                <Beauty />
                <Production />
            </div>
        </fieldset>
    );
}

export default Stats;