import React from "react";
import Intro from "./components/intro";
import Projects from "./components/projects";
import styled from "styled-components";
import { Icons } from "./components/utilities";
import About from "./components/about"
import Footer from "./components/footer"
// import Particles from "./components/particles";


export default function App() {
  return (
    <>
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "70vh",
          overflow: "hidden",
        }}
      >
        <Particles />
      </div> */}
      <Intro />
      <Title>
        <Icons.Dash size="30" />
        <LineBg>projects</LineBg>
        <Icons.Expand size="35" color="#ff5722" />
      </Title>
      <Projects />
      <Title>
        <Icons.Dash size="30" />
        <LineBg>about</LineBg>
        <Icons.Expand size="35" color="#ff5722" />
      </Title>
      <About/>
      <Title>
        <Icons.Dash size="30" />
        <LineBg>get in touch</LineBg>
        <Icons.Expand size="23" color="#ff5722" />
      </Title>
      <Footer/>
    </>
  );
}

const LineBg = styled.span`
  display: inline-block;
  padding-right: 5px;

  &:after {
    content: "";
    display: block;
    height: 7px;
    opacity: 20%;
    z-index: -10;
    background-color: #333;
    margin-left: 2em;
    margin-top: -0.6em;
    border-radius: 1px;
  }
`;

const Title = styled.h2`
  margin: 1em 0 1em 2em;
  font-size: 1.8em;
  width: fit-content;
  color: #1f2762;
  &:hover {
    cursor: pointer;
  }
`;
