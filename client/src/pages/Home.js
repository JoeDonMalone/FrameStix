import React from "react";

import { Link } from "react-router-dom";
import Image from "../components/Images";
import "../components/Nav";
import ImageOne from "../assets/images/Image1.jpg";
import Container from "../components/Container";
import ImageThree from "../assets/images/Image3.jpg";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { GiJesterHat } from "react-icons/gi";
import { SiMicrosoftazure } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { IoCloudUploadOutline } from "react-icons/io5";
import "./style.css";

function Home() {
  return (
    <>
      <Container className = {'home-container'}>
        <div className="container">
          <div className="row buffer">
            <Image
              className={"col-sm-6 image-one"}
              containerStyle={{paddingLeft: "0px"}}
              src={ImageOne}
              floatPosition={"float-start"}
              imageStyle={{marginRight:"0px"}}
              alt="Picutre of a ruggedly handsome young man by the name of Joe Malone"
            ></Image>
            <div className="col-sm-6 greeting">
              <div className="hello">
                <p className="hello-there">
                  Hello there,
                  <br /> I'm Joe.
                  <br />
                </p>
              </div>
              <p>
                I'm a Full-Stack Web developer, and I'd love to help you with
                your project. Please take a moment to look around my space, and
                if you'd like to get in touch, simply hit the button below.
              </p>
              <br />
              <p id="get-in-touch-button">
                <a
                  className="get-in-touch button"
                  download="Joe_Malone_Resume.pdf"
                  href="../assets/Joe_Malone_Resume.pdf"
                >
                  Resume
                </a>
                <Link to="/contact" className="get-in-touch button" >
                  Get In Touch
                </Link>
              </p>
            </div>
            
            <div id = "skills-container" className="col-sm-6 greeting skills-container">
              <div className=" row skills-row top">
                <div className="col skills-col">
                  <SiJavascript className="skills-icon"></SiJavascript>
                  <h6>Javascript</h6>
                </div>
                <div className="col skills-col">
                  <FaNode className="skills-icon"></FaNode>
                  <h6>NodeJs</h6>
                </div>
                <div className="col skills-col">
                  <FaReact className="skills-icon"></FaReact>
                  <h6>React</h6>
                </div>
              </div>
              <div className=" row skills-row ">
                <div className="col skills-col">
                  <FaPython className="skills-icon"></FaPython>
                  <h6>Python</h6>
                </div>
                <div className="col skills-col">
                  <IoCloudUploadOutline className="skills-icon" />
                  {/* <h6>Cloud</h6> */}
                </div>
                <div className="col skills-col">
                  <GiJesterHat className="skills-icon"></GiJesterHat>
                  <h6>Jest</h6>
                </div>
              </div>
              <div className=" row skills-row ">
                <div className="col skills-col">
                  <GrMysql className="skills-icon"></GrMysql>
                  <h6>MySQL</h6>
                </div>
                <div className="col skills-col">
                  <SiJquery className="skills-icon"></SiJquery>
                  <h6>JQuery</h6>
                </div>
                <div className="col skills-col">
                  <SiMicrosoftazure className="skills-icon"></SiMicrosoftazure>
                  <h6>Azure</h6>
                </div>
              </div>
            </div>
            <Image
              className={"col-sm-6 image-three"}
              containerStyle={{paddingRight: "0px"}}
              src={ImageThree}
              floatPosition={"float-end"}
              imageStyle={{marginRight:"0px"}}
              alt="The Malone Family celebrating the birth of their second daughter!"
            ></Image>
          </div>
        </div>
      </Container>  
    </>
  );
}

export default Home;
