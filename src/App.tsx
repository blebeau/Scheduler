import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Locations from "./components/Locations";
import Scheduler from "./components/Scheduler";

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
                  id="id"
                  name="test"
                  role="test"
                  currentLocation="test"
                  nextLocations={[]}
                />
              }
            />
            <Route
              path="/locations"
              element={<Locations id="id" name="test" assignedStaff={[]} />}
            />
            <Route path="/scheduler" element={<Scheduler />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
