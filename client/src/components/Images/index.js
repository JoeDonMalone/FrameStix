import React from "react";
import "../../assets/images/Image1.jpg";
import "./style.css";

function Image(props) {
  return (
    <div className={`${props.className}`}>
      <img
        className="rounded float-start img-thumbnail"
        src={props.src}
        alt={props.alt}
        style={props.style}
      />
    </div>
  );
}

export default Image;
