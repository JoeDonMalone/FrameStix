import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Container(props) {
  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  );
}
export default Container;
