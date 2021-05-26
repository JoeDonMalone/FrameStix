import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Image from "../components/Images";
// import DownloadLink from '.'
import "../components/Nav";
import ImageOne from "../assets/images/Image1.jpg";
import ImageTwo from "../assets/images/Image2.jpg";
import ImageThree from "../assets/images/Image3.jpg";
import Footer from "../components/Footer";
import Resume from "../assets/Joe_Malone_Resume.pdf";
import { FaNodeJs } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { GiJesterHat } from "react-icons/gi";
import { SiMicrosoftazure } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IoCloudUploadOutline } from "react-icons/io5";
import "./style.css";


function Home() {
  return (
    <>
      <div className="container">
        <div className="row buffer">
          <Image
            className={"image-one"}
            src={ImageOne}
            alt={"Ruggedly handsome young man by the name of Joe Malone"}
          ></Image>
          <div className="col-sm-6 greeting">
            <div className="hello">
              <p className="hello-there">
                Hello there,
                <br /> I'm Joe.
                <br />
                <br />
              </p>
            </div>
            <p>
              I'm a Full-Stack Web developer, and I'd love to help you with your
              project. Please take a moment to look around my space, and if
              you'd like to get in touch, simply hit the button below.
            </p>
            <br />
            <p id="get-in-touch-button">
              <a
                className="get-in-touch button"
                href="././Assets/Joe_Malone_Resume.pdf"
              >
                Resume
              </a>
              <a className="get-in-touch button" href="./contact.html">
                Get In Touch
              </a>
            </p>
          </div>
          <div className="col-sm-6 greeting skills-container">
            <div className=" row skills-row ">
              <div className="col skills-col">
                <SiJavascript className="skills-icon"></SiJavascript>
              </div>
              <div className="col skills-col">
                <FaNode className="skills-icon"></FaNode>
              </div>
              <div className="col skills-col">
                <FaReact className="skills-icon"></FaReact>
              </div>
            </div>
            <div className=" row skills-row ">
              <div className="col skills-col">
                <FaPython className="skills-icon"></FaPython>
              </div>
              <div className="col skills-col"><IoCloudUploadOutline className = "skills-icon"/>
              </div>
              <div className="col skills-col">
                <GiJesterHat className="skills-icon"></GiJesterHat>
              </div>
            </div>
            <div className=" row skills-row ">
              <div className="col skills-col">
                <GrMysql className="skills-icon"></GrMysql>
              </div>
              <div className="col skills-col">
                <FaNodeJs className="skills-icon"></FaNodeJs>
              </div>
              <div className="col skills-col">
                <SiMicrosoftazure className="skills-icon"></SiMicrosoftazure>
              </div>
            </div>
          </div>
          <Image
            className={"image-three"}
            src={ImageThree}
            alt="Picutre of a ruggedly handsome young man by the name of Joe Malone"
          ></Image>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
