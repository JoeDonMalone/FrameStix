import React from "react";
import Image from "../components/Images";
import "../components/Nav";
import ImageOne from "../assets/images/Image1.jpg";
import Container from "../components/Container";
import "./style.css";

function Home() {
  return (
    <>
      <Container className={"d-flex flex-column min-vh-100 home-container"} style={{ marginBottom: "20px" }}>
        <div className = "container">
        <section className="the-story">
          <h1>The Story</h1>
          <div className="col-xs-12">
            <Image
              className={"story-img"}
              containerStyle={{paddingLeft: "0px"}}
              src={ImageOne}
              floatPosition={"float-start"}
              imageStyle={{marginRight:"20px"}}
              alt="Picutre of a ruggedly handsome young man by the name of Joe Malone"
            ></Image>

            <p className="about-me-text">
              Joe Malone is a 2007 High School graduate of Marble Falls, TX.
              Shortly after graudation, Joe enlisted in the US Navy where he
              obtained a rating of Aviation Electronics Technician. In 2008,
              Joe's orders saw him assigned to Helicopter Sea Combat Squadron
              Nine (HSC-9), located in Norfolk, VA. It was here that he gained
              the foundational skills necessary to propel him into a successful
              military career. Over the course of the next four years, Joe
              received several commendations for excellence in the performance
              of his duties, whereby, he successfully advanced to the rank of
              E-5. In September 2013, upon completion of his enlistment
              contract, Joe was honorably discharged, and promptly moved home to
              Texas.
              <br />
              <br />
            </p>
            <p>
              Once discharged from the Department of Defense, Joe entered into
              the world of Metrology, hiring on with Hexagon Manufucturing
              Intelligence as a Field Service Engineer. In this role, Joe's
              territory included: Texas, Louisiana, Arkansas, and Oklahoma. His
              primary duties were to install, calibrate, and repair Coordinate
              Measurement Machines(CMMs), with a special emphasis on the Italian
              'DEA' Model of Machine. He gained advanced knowledge of geometric
              mapping for bridge and gantry style machines, with the use of
              Laser and other calibrated reference standards. As his experience
              increased and his abilities improved he was tasked with the
              training and instruction of new hires for the region.
              <br />
              <br />
            </p>
            <p>
              More to Come...
              <br />
              <br />
            </p>
          </div>
        </section>
        </div>
      </Container>
    </>
  );
}

export default Home;
