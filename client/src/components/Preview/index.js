import React from "react";
import Container from "../Container";
import "./style.css";

function Preview(props) {
  return (
    <>
      <div className={"preview-container col-8 preview-greeting"}>
        <div className={"preview-content"}>
          <iframe
            className={"iframe"}
            src="https://joedonmalone.github.io/WeatherBee/"
            title="weatherBee"
          ></iframe>
        </div>
      </div>

      <div className={"preview-container col-8 preview-greeting"}>
        <div className={"preview-content"}>
          <iframe
            className={"iframe"}
            src="https://joedonmalone.github.io/Password_Generator/"
            title="weatherBee"
          ></iframe>
        </div>
      </div>

      <div className={"preview-container col-8 preview-greeting"}>
        <div className={"preview-content"}>
          <iframe
            className={"iframe"}
            src="https://joedonmalone.github.io/FoodFeed/"
            title="weatherBee"
          ></iframe>
        </div>
      </div>

      <div className={"preview-container col-8 preview-greeting"}>
        <div className={"preview-content"}>
          <iframe
            className={"iframe"}
            src="https://calm-woodland-24600.herokuapp.com/"
            title="weatherBee"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Preview;
