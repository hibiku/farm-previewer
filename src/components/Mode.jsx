import Inspect from "./Inspect.jsx"
import Decorate from "./Decorate.jsx"
import { useState } from "../StateProvider.jsx";

function Mode() {
    const [state, { onModeClick }] = useState();
    return (
        <fieldset>
            <legend>{`Mode: ${state.mode}`}</legend>
            <div classList={{ [state.mode]: true }}>
                <Show
                    when={state.mode === "inspect"}
                    fallback={
                        <>
                            <Decorate />
                            <button type="button" onClick={[onModeClick, { mode: "inspect" }]}>Switch to Inspect mode</button>
                        </>
                    }
                >
                    <Inspect />
                    <button type="button" onClick={[onModeClick, { mode: "decorate" }]}>Switch to Decorate mode</button>
                </Show>
            </div>
        </fieldset>
    );
}

export default Mode;