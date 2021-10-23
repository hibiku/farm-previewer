import { Switch, Match } from "solid-js";
import { useState } from "../StateProvider.jsx";
import { objectDisplayTypes } from "../data.js";

function Inspect() {
    const [state] = useState();
    return (
        <table>
            <caption>Cell properties</caption>
            <Switch fallback={
                <tbody>
                    <tr>
                        <th>Type</th>
                        <td>{objectDisplayTypes[state.cells[state.mode.inspect.rootIndex].type]}</td>
                    </tr>
                </tbody>
            }>
                <Match when={state.cells[state.mode.inspect.rootIndex].type === "building"}>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>{objectDisplayTypes[state.cells[state.mode.inspect.rootIndex].type]}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{state.cells[state.mode.inspect.rootIndex].name}</td>
                        </tr>
                        <tr>
                            <th>Adjacent roads (in-network)</th>
                            <td>{state.cells[state.mode.inspect.rootIndex].numRoads}</td>
                        </tr>
                        <tr>
                            <th>Yield rate (W/10 mins)</th>
                            <td>{state.cells[state.mode.inspect.rootIndex].baseWaru + "(+" + state.cells[state.mode.inspect.rootIndex].bonusWaru + ")"}</td>
                        </tr>
                        <tr>
                            <th>Max capacity (W)</th>
                            <td>{state.cells[state.mode.inspect.rootIndex].baseBanked + "(+" + state.cells[state.mode.inspect.rootIndex].bonusBanked + ")"}</td>
                        </tr>
                        <tr>
                            <th>Aesthetic points</th>
                            <td>{state.cells[state.mode.inspect.rootIndex].baseDecor}</td>
                        </tr>
                    </tbody>
                </Match>
                <Match when={state.cells[state.mode.inspect.rootIndex].type === "decor"}>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>{objectDisplayTypes[state.cells[state.mode.inspect.rootIndex].type]}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{state.cells[state.mode.inspect.rootIndex].name}</td>
                        </tr>
                        <tr>
                            <th>Adjacent roads (in-network)</th>
                            <td>{state.cells[state.mode.inspect.rootIndex].numRoads}</td>
                        </tr>
                        <tr>
                            <th>Aesthetic points</th>
                            <td>{state.cells[state.mode.inspect.rootIndex].baseDecor + "(+" + state.cells[state.mode.inspect.rootIndex].bonusDecor + ")"}</td>
                        </tr>
                    </tbody>
                </Match>
                <Match when={state.cells[state.mode.inspect.rootIndex].type === "road"}>
                    <tbody>
                        <tr>
                            <th>Type</th>
                            <td>{objectDisplayTypes[state.cells[state.mode.inspect.rootIndex].type]}</td>
                        </tr>
                        <tr>
                            <th>Connected to house</th>
                            <td>{state.cells[state.mode.inspect.rootIndex].inNetwork ? "Yes" : "No"}</td>
                        </tr>
                    </tbody>
                </Match>
            </Switch>
        </table>
    );
}

export default Inspect;