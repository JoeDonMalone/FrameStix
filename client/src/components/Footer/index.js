import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container-footer">
        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com/joe.d.malone"
            className="fab fa-facebook"
          ></a>
          <a
            href="https://twitter.com/JoeDMalone"
            className="fab fa-twitter-square"
          ></a>
          <a
            href="https://www.linkedin.com/in/joe-malone-18126673/"
            className="fab fa-linkedin"
          ></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer