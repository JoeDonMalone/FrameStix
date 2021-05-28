import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../components/Nav";
import Container from "../components/Container";
import ResponsiveDrawer from "../components/SideNav";
import Preview from "../components/Preview";
import "../components/SideNav/style.css";

function Highlights() {
  return (
    <>
      <Container style={{ marginBottom: "20px" }} className = {'preview-container-holder'}>
        <ResponsiveDrawer/>
        <Preview>
        </Preview>
      </Container>
    </>
  );
}

export default Highlights;
