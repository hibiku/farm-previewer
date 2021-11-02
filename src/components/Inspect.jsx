import { Switch, Match } from "solid-js";
import { useState } from "../StateProvider.jsx";
import { aufhebenWaru } from "../data.js";

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
                            <th>Yield rate (W/10 mins)</th>
                            <Show
                                when={state.config.useAufheben}
                                fallback={<td>{`${state.grid[state.inspect.root].object.waru} (+${state.grid[state.inspect.root].network.waru})`}</td>}
                            >
                                <td>{`${state.grid[state.inspect.root].object.waru} (+${state.grid[state.inspect.root].network.waru}) (+${aufhebenWaru})`}</td>
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

export default Inspect;