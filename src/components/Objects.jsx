import { useState } from "../StateProvider.jsx";

function Objects() {
    const [state] = useState();
    return (
        <table>
            <caption>Grid properties</caption>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <For each={state.objects.building}>
                    {
                        (pair) => <tr>
                            <td>Building</td>
                            <td>{pair[0]}</td>
                            <td>{pair[1]}</td>
                        </tr>
                    }
                </For>
                <For each={state.objects.decor}>
                    {
                        (pair) => <tr>
                            <td>Decor</td>
                            <td>{pair[0]}</td>
                            <td>{pair[1]}</td>
                        </tr>
                    }
                </For>
                <Show when={state.objects.road.inNetwork > 0}>
                    <tr>
                        <th colspan={2}>Road (in-network)</th>
                        <td colspan={1}>{state.objects.road.inNetwork}</td>
                    </tr>
                </Show>
                <Show when={state.objects.road.outNetwork > 0}>
                    <tr>
                        <th colspan={2}>Road (out-network)</th>
                        <td colspan={1}>{state.objects.road.outNetwork}</td>
                    </tr>
                </Show>
                <tr>
                    <th colspan={2}>Free cells</th>
                    <td colspan={1}>{state.space}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Objects;