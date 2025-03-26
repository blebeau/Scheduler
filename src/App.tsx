import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="App">
      <div style={{ width: "75%", display: "flex" }}>
        <BrowserRouter>
          <div style={{ width: "18%" }}>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/staff"
              element={
                <List
                  name="test"
                  role="test"
                  currentLocation="test"
                  nextLocations={[]}
                />
              }
            />
            <Route
              path="/locations"
              element={<Locations name="test" assignedStaff={[]} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
