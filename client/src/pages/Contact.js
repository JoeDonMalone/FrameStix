import React from "react";
import Image from "../components/Images";
// import DownloadLink from '.'
import "../components/Nav";
import ImageOne from "../assets/images/Image1.jpg";
import Container from "../components/Container";
import ImageThree from "../assets/images/Image3.jpg";
import Footer from "../components/Footer";
import "./style.css";

function Contact() {
  return (
    <>
      <Container style={{ marginBottom: "20px" }}>
            <Image
              className={"image-three"}
              src={ImageThree}
              alt="Picutre of a ruggedly handsome young man by the name of Joe Malone"
            ></Image>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
