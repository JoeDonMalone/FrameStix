import React from "react";
import './style.css'

function Nav() {
  return (
    <>
    <header>
      <nav className="navbar navbar fixed-top navbar-expand-lg navbar-light bg-light header">
        <div className="container-fluid">
          <a className="navbar-brand" href="./index.html">
            Joe Don Malone
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li>
                <a className="dropdown-item" href="./story.html">
                  My Story
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="./contact.html">
                  Get in Touch
                </a>
              </li>
              <li>
                <hr className="dropdown-divider"></hr>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://github.com/JoeDonMalone"
                  target="_blank"
                >
                  GitHub Projects
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="./portfolio.html">
                  Highlights
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
    </>
  );
}

export default Nav;
