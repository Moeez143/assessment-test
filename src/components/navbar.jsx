import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

function Navbar() {
  return (
    <nav className="navbar border navbar-expand-lg bg-white fixed-top">
      <div className="container">
        <a
          className="navbar-brand my-3 px-3 fw-semibold text-primary fs-3"
          href="#"
        >
          LeadPage
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5 pe-4">
            <li className="nav-item">
              <a className="nav-link fw-medium my-3 mx-2 px-2" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fw-medium my-3 mx-2 px-2"
                href="#What We Do"
              >
                What We Do
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium my-3 mx-2 px-2" href="#home">
                Our Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium my-3 mx-2 px-2" href="#home">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a
                className="fw-medium mx-2 mt-2 px-4 fs-5  py-3 btn btn-outline-primary rounded-4 "
                href="#home"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
