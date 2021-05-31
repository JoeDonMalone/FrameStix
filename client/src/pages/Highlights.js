import React from "react";
import "../components/Nav";
import Container from "../components/Container";
import Preview from "../components/Preview";
import "../components/SideNav/style.css";

function Highlights() {
  return (
    <>
      <Container style={{ marginBottom: "20px" }} className = {'preview-container-holder'}>
        <Preview>
        </Preview>
      </Container>
    </>
  );
}

export default Highlights;
