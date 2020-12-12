import React, { Link } from "react";

function Navbar() {
  return (
    <header className="mb-5">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand my-header p-3 text relative" href="#">
          Araceli Mia
        </a>
        <botton
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </botton>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    Home
                </li>
                <li className="nav-item">
                    Products
                </li>
                <li className="nav-item">
                    Contact Me
                </li>
            </ul>
        </div>
      </nav> 
    </header>
  );
}

export default Navbar;

<header className="mb-5 border-bottom">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark bottom-line">
    <a className="navbar-brand my-header p-3 text relative" href="/">
      Ivan Torres
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {/* <Link
              to="/"
              className={
                window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            > */}
          Home
          {/* </Link> */}
        </li>
        <li className="nav-item">
          {/* <Link
              to="/AboutMe"
              className={
                window.location.pathname === "/AboutMe"
                  ? "nav-link active"
                  : "nav-link"
              }
            > */}
          About Me
          {/* </Link> */}
        </li>
        <li className="nav-item">
          {/* <Link
              to="/Contact"
              className={
                window.location.pathname === "/Contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            > */}
          Contact
          {/* </Link> */}
        </li>
      </ul>
    </div>
  </nav>
</header>;
