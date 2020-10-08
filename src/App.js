import React from "react";
import Intro from "./components/intro";
import { HorizontalRule } from "@styled-icons/material-outlined/HorizontalRule";
import styled from "styled-components";

export default function App() {
  return (
    <>
      <Intro />
      <Title>
        <HorizontalRule size="30" />
        projects
      </Title>
      <Title>
        <HorizontalRule size="30" />
        about
      </Title>
      <Title>
        <HorizontalRule size="30" />
        get in touch
      </Title>
    </>
  );
}

const Title = styled.h2`
  margin-left: 2em;
  font-size: 1.8em;
  width: fit-content;

  &:after {
    content: "";
    display: block;
    height: 7px;
    opacity: 20%;
    z-index: -10;
    background-color: #002;
    margin-left: 2em;
    margin-top: -0.6em;
  }
`;
