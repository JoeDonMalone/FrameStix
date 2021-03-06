/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Container from "../Container"


import "./style.css";

function Footer() {
  return (
    <footer>
   <Container className = {'footer mt-auto py-3 bg-light fixed-bottom'}>
      <div className="container-footer">
        <div className="footer-social-icons">
          <a href = "https://www.facebook.com/joe.d.malone"
            className="fab fa-facebook"
            rel="noreferrer" target="_blank"
          ></a>
          <a
            href="https://twitter.com/JoeDMalone"
            className="fab fa-twitter-square"
            rel="noreferrer" target="_blank"
          ></a>
          <a
            href="https://www.linkedin.com/in/joe-malone-18126673/"
            className="fab fa-linkedin"
            rel="noreferrer" target="_blank"
          ></a>
        </div>
      </div>
      </Container>
      </footer>
  );
}

export default Footer