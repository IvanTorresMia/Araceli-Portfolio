import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="Nav">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand my-header text relative" href="/">
            Araceli Mia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
              
              </li>
              <li className="nav-item">
              <Link
                to="/AboutMe"
                className={
                  window.location.pathname === "/AboutMe"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About Me
              </Link>
             
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

// de salud, mejor calidad de vida
// promover cvd
// que pueda alludar alas personas sentirce mejor
// Tener una forma de poder tener salud en tu propia casa.
