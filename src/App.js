import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import "../src/assests/stylesheet/Mobile/mobile.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/winbuzz-clone" element={<Home />} />
        <Route path="/winbuzz-clone/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
