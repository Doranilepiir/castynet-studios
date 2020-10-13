import React from "react";
import Intro from "./components/intro";
import Projects from "./components/projects";
import { HorizontalRule } from "@styled-icons/material-outlined/HorizontalRule";
import styled from "styled-components";
import Particles from "./components/particles";
import { ExpandOutline } from "@styled-icons/evaicons-outline/ExpandOutline";
import About from "./components/about"

export default function App() {
  return (
    <>
      <div
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
      </div>
      <Intro />
      <Title>
        <HorizontalRule size="30" />
        <LineBg>projects</LineBg>
        <ExpandOutline size="35" color="#ff5722" />
      </Title>
      <Projects />
      <Title>
        <HorizontalRule size="30" />
        <LineBg>about</LineBg>
        <ExpandOutline size="35" color="#ff5722" />
      </Title>
      <About/>
      <Title>
        <HorizontalRule size="30" />
        <LineBg>get in touch</LineBg>
        <ExpandOutline size="23" color="#ff5722" />
      </Title>
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
