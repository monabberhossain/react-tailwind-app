import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Prices from "./components/Prices/Prices";

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <h1 className="my-2 text-3xl font-bold underline">
                React: Tailwind
            </h1>
            <Prices></Prices>
        </div>
    );
}

export default App;
