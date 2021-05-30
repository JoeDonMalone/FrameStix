import React from "react";
import Image from "../components/Images";
import "../components/Nav";
import Container from "../components/Container";
import ContactForm from '../components/ContactForm'
import ImageTwo from "../assets/images/Image2.jpg";
import "./style.css";

function Contact() {


  return (
    <>
      <Container style={{ marginBottom: "20px" }}>
        <Image
          className={"col-sm-6 image-three"}
          containerStyle={{ paddingLeft: "0px" }}
          src={ImageTwo}
          floatPosition={"float-start"}
          imageStyle={{ marginRight: "0px" }}
          alt="Picutre of a ruggedly handsome young man by the name of Joe Malone"
        ></Image>
        <ContactForm>

        </ContactForm>
      </Container>
    </>
  );
}

export default Contact;
