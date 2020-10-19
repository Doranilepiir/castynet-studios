import React, { Component } from "react";
import styled from "styled-components";
import { HorizontalRule } from "@styled-icons/material-outlined/HorizontalRule";

// Horizontal line, move line to ::Before ::After
 
export default class Intro extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Title>
            <HorizontalRule size="40" />
            Castynet Studios
          </Title>
          <Description>
            <Underline>empowering software</Underline>
            <span role="img" aria-label="raised-fist">
              {" "}✊🏽
            </span>
          </Description>
        </Wrapper>
      </>
    );
  }
}
const Underline = styled.span`
  text-decoration: underline;
`;

const Wrapper = styled.div`
  margin-top: 15vh;
  height: 50vh;
`;

const Title = styled.h1`
  margin-left: 1em;
  font-size: 3em;
  letter-spacing: 2px;
  color: #1f2762;
`;

const Description = styled.h2`
  margin-left: 3em;
  font-size: 2em;
  letter-spacing: 1px;
  color: #ff5722;
`;
