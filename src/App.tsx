import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <List name="test" role="test" currentLocation="test" nextLocations={[]} />
    </div>
  );
}

export default App;
