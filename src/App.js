import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Route exact path="/" component={Home} />
    </div>
    </Router>
  );
}

export default App;
