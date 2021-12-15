import "./App.scss";
import Slider1 from "./components/Slider1";
import Tabs from "./components/Tabs";
import WeirdButton from "./components/WeirdButton";
import "./scss/main.scss";
function App() {
  return (
    <div className="App">
      <WeirdButton />
      <div className="items">
        <Slider1 slider={1} />
        <Slider1 slider={2} />
        <Tabs />
      </div>
    </div>
  );
}

export default App;
