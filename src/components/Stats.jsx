import Objects from "./Objects.jsx";
import Beauty from "./Beauty.jsx"
import Waru from "./Waru.jsx"

function Stats() {
    return (
        <fieldset>
            <legend>Stats</legend>
            <div class="stats">
                <Objects />
                <Beauty />
                <Waru />
            </div>
        </fieldset>
    );
}

export default Stats;