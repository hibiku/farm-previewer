import { onCleanup, onMount } from "solid-js";
import { useState } from "../StateProvider.jsx";
import { Chart, LineElement, PointElement, LineController, CategoryScale, LinearScale, Legend, Tooltip } from "chart.js";
Chart.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Legend, Tooltip);

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
                    <th colspan={2}>Available cells</th>
                    <td colspan={1}>{state.summary.count.available}</td>
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
    const [state, { setCanvas, setChart, updateChart }] = useState();
    const setupCanvas = canvas => {
        setCanvas(canvas);
    };
    onMount(() => {
        setChart(new Chart(state.canvas, {
            type: "line",
            options: {
                animation: false,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true
                        },
                        position: "bottom"
                    },
                    tooltip: {
                        usePointStyle: true
                    }
                },
                elements: {
                    point: {
                        pointStyle: "circle"
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: "Time (mins)"
                        }
                    },
                    y: {
                        display: true,
                        min: 0,
                        title: {
                            display: true,
                            text: "Product (W)"
                        }
                    }
                }
            }
        }));
        updateChart();
    });
    onCleanup(() => {
        state.chart.destroy();
    });
    return (
        <>
            <table>
                <caption>Waru production</caption>
                <thead>
                    <tr>
                        <th colspan={2} class="canvas-header">Production timeline</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan={2} class="canvas-data">
                            <canvas ref={setupCanvas} />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Max total production rate (W/10 mins)</th>
                        <td>{state.summary.production.products[state.summary.production.lastOptimalCycle].marginal}</td>
                    </tr>
                    <tr>
                        <th>Time until diminishing total product (mins)</th>
                        <td>{10 * state.summary.production.lastOptimalCycle}</td>
                    </tr>
                    <tr>
                        <th>Total product (W)</th>
                        <td>{state.summary.production.products[state.summary.production.products.length - 1].total}</td>
                    </tr>
                    <tr>
                        <th>Total production time (mins)</th>
                        <td>{10 * (state.summary.production.products.length - 1)}</td>
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