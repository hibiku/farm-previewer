import { createSignal } from "solid-js";
import { useState } from "../StateProvider.jsx";

function Waru() {
    const [state] = useState();
    const [truncated, setTruncated] = createSignal(true);
    const handleClick = () => {
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
                    <Show when={truncated() && state.production.numOptimalCycles > 0}>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                    </Show>
                    <For each={state.production.cycles.slice(truncated() ? state.production.numOptimalCycles : 0)}>
                        {
                            (cycle, index) => <tr>
                                <td>{10 * (index() + (truncated() ? state.production.numOptimalCycles : 0))}</td>
                                <td>{cycle.total}</td>
                                <td>{cycle.marginal}</td>
                                <td>{cycle.average}</td>
                            </tr>
                        }
                    </For>
                </tbody>
                <tfoot>
                    <tr>
                        <Show when={state.production.numOptimalCycles > 0}>
                            <th colspan={4}>
                                <button type="button" onClick={handleClick}>
                                    {(truncated() ? "Expand" : "Collapse") + " rows"}
                                </button>
                            </th>
                        </Show>
                    </tr>
                    <tr>
                        <th colspan={2}>Max yield (W)</th>
                        <td colspan={2}>{state.production.cycles[state.production.cycles.length - 1].total}</td>
                    </tr>
                    <tr>
                        <th colspan={2}>Time until max yield (mins)</th>
                        <td colspan={2}>{10 * state.production.numMaxCycles}</td>
                    </tr>
                    <tr>
                        <th colspan={2}>Max yield rate (W/10 mins)</th>
                        <td colspan={2}>{state.production.cycles[state.production.numOptimalCycles].marginal}</td>
                    </tr>
                    <tr>
                        <th colspan={2}>Time until diminishing returns (mins)</th>
                        <td colspan={2}>{10 * state.production.numOptimalCycles}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
}

export default Waru;