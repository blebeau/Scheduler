import "./App.css";
import { BrowserRouter } from "react-router";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div style={{ width: "20%" }}>
        <Navbar />
      </div>

      <div style={{ width: "80%" }}>
        {" "}
        <BrowserRouter>
          <List
            name="test"
            role="test"
            currentLocation="test"
            nextLocations={[]}
          />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
