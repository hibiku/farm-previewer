import { createEffect, onCleanup, onMount } from "solid-js";
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
                <For each={state.summary.tiling.building.names}>{
                    name => {
                        return <tr>
                            <td>Building</td>
                            <td>{name}</td>
                            <td>{state.summary.tiling.building.pairs[name].roots.length}</td>
                        </tr>;
                    }
                }</For>
                <For each={state.summary.tiling.decor.names}>{
                    name => {
                        return <tr>
                            <td>Decor</td>
                            <td>{name}</td>
                            <td>{state.summary.tiling.decor.pairs[name].roots.length}</td>
                        </tr>;
                    }
                }</For>
                <Show when={state.summary.tiling.blank.roots.length > 0}>
                    <tr>
                        <th colspan={2}>Blank tiles</th>
                        <td colspan={1}>{state.summary.tiling.blank.roots.length}</td>
                    </tr>
                </Show>
                <Show when={state.summary.tiling.road.count.inNetwork > 0}>
                    <tr>
                        <th colspan={2}>Road (in-network)</th>
                        <td colspan={1}>{state.summary.tiling.road.count.inNetwork}</td>
                    </tr>
                </Show>
                <Show when={state.summary.tiling.road.count.outNetwork > 0}>
                    <tr>
                        <th colspan={2}>Road (out-network)</th>
                        <td colspan={1}>{state.summary.tiling.road.count.outNetwork}</td>
                    </tr>
                </Show>
                <tr>
                    <th colspan={2}>Remaining free tiles</th>
                    <td colspan={1}>{state.summary.tiling.free.count}</td>
                </tr>
            </tbody>
        </table>
    );
}

function Beauty() {
    const [state] = useState();
    return (
        <table>
            <caption>Beauty details</caption>
            <thead>
                <tr>
                    <th>Combine Result Choices</th>
                    <th>Building Storage Capacity (W)</th>
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
    const [state, { setChart, updateChart }] = useState();
    let canvas;
    onMount(() => {
        setChart(new Chart(canvas, {
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
    });
    createEffect(() => {
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
                            <canvas ref={canvas} />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Max marginal product (W)</th>
                        <td>{state.summary.production.lastOptimalRate}</td>
                    </tr>
                    <tr>
                        <th>Time until diminishing marginal product (mins)</th>
                        <td>{10 * state.summary.production.lastOptimalCycle}</td>
                    </tr>
                    <tr>
                        <th>Total product (W)</th>
                        <td>{state.summary.production.products[state.summary.production.products.length - 1]}</td>
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