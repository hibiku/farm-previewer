import Config from "./components/Config.jsx";
import Mode from "./components/Mode.jsx";
import Grid from "./components/Grid.jsx";
import Stats from "./components/Stats.jsx";
import { StateProvider } from "./StateProvider.jsx";

function App() {
    return (
        <StateProvider>
            <Config />
            <Mode />
            <Grid />
            <Stats />
        </StateProvider>
    );
}

export default App;