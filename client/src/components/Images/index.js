import React from "react";
import "../../assets/images/Image1.jpg";
import "./style.css";

function Image(props) {
  return (
    <div className={props.className} style={props.containerStyle}>
      <img
        className={`rounded img-thumbnail ${props.floatPosition}`}
        src={props.src}
        alt={props.alt}
        style={props.imageStyle}
      />
    </div>
  );
}
// 
export default Image;
