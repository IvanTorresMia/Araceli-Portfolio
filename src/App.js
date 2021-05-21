import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
