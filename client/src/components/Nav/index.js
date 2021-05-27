import React from "react";
// import "./style.css";
import { Link, useParams } from "react-router-dom";
<link rel="stylesheet" href="./style.css" />;
{
  /* <Link to="/FrameStix"></Link> */
}
function Nav() {
  return (
    <>
      <header>
        <nav className="navbar navbar fixed-top navbar-expand-lg navbar-light bg-light header">
          <div className="container-fluid">
            <Link to="/FrameStix" className={"navbar-brand"}>
              Joe Don Malone
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li>
                  <Link to="/FrameStix/story" className={"dropdown-item"}>
                    My Story
                  </Link>
                </li>
                <li>
                  <Link to="/FrameStix/contact" className={"dropdown-item"}>
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="https://github.com/JoeDonMalone" rel="noreferrer" target="_blank">
                    GitHub Projects
                  </a>
                </li>
                <li>
                  <Link to="/FrameStix/highlights" className={"dropdown-item"}>
                    Highlights
                  </Link>
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
