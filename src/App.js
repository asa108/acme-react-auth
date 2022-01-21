import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" exact={true} element={<Home />}></Route>
            <Route path="/staff" exact={true} element={<Staff />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
