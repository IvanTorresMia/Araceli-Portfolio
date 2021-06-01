import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AboutMe" component={AboutMe} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
