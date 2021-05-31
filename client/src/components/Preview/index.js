import React from "react";
import ResponsiveDrawer from '../SideNav'
import "./style.css";

function Preview() {
  return (
    <>
    <div container className = "col-3">
    <ResponsiveDrawer/>
    </div>
      <div className="row container title-row">
        <h1 className="title-row"> Recent Personal Projects</h1>
        <div className={"project-row preview-greeting"}>
          <div className={"preview-content"}>
            <iframe
              className={"iframe"}
              src="https://joedonmalone.github.io/WeatherBee/"
              title="weatherBee"
            ></iframe>
          </div>
        </div>
        <div className={"project-row preview-greeting"}>
          <div className={"preview-content"}>
            <iframe
              className={"iframe"}
              src="https://joedonmalone.github.io/Password_Generator/"
              title="Password Generator"
            ></iframe>
          </div>
        </div>

        <div className={"project-row preview-greeting"}>
          <div className={"preview-content"}>
            <iframe
              className={"iframe"}
              src="https://joedonmalone.github.io/FoodFeed/"
              title="Food Feed"
            ></iframe>
          </div>
        </div>

        <div className={"project-row preview-greeting"}>
          <div className={"preview-content"}>
            <iframe
              className={"iframe"}
              src="https://calm-woodland-24600.herokuapp.com/"
              title="iTravel"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
