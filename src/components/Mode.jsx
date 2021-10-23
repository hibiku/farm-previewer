import Inspect from "./Inspect.jsx"
import Decorate from "./Decorate.jsx"
import { useState } from "../StateProvider.jsx";

const displayModes = {
    decorate: "Decorate",
    inspect: "Inspect"
};

function ModeToggle() {
    const [state, { setMode }] = useState();
    const handleClick = () => {
        setMode(state.mode.type === "inspect" ? "decorate" : "inspect");
    };
    return (
        <button
            type="button"
            onClick={handleClick}>
                {
                    "Switch to " + (state.mode.type === "inspect" ? "Decorate" : "Inspect") + " mode"
                }
        </button>
    );
}

function Mode() {
    const [state] = useState();
    return (
        <fieldset>
            <legend>{"Mode: " + displayModes[state.mode.type]}</legend>
            <div
                classList={{
                    inspect: state.mode.type === "inspect",
                    decorate: state.mode.type === "decorate"
                }}
            >
                <Show
                    when={state.mode.type === "inspect"}
                    fallback={<Decorate />}
                >
                    <Inspect />
                </Show>
                <ModeToggle />
            </div>
        </fieldset>
    );
}

export default Mode;