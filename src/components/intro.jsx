import React, { Component } from "react";
import styled from "styled-components";
import { HorizontalRule } from "@styled-icons/material-outlined/HorizontalRule";

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
            <HorizontalRule size="30" />
            empowering software
          </Description>
        </Wrapper>
      </>
    );
  }
}


const Wrapper = styled.div`
  margin-top: 20vh;
  height: 50vh;
`;

const Title = styled.h1`
  font-size: 3em;
  letter-spacing: 2px;
`;

const Description = styled.h2`
  margin-left: 2em;
  font-size: 2em;
  letter-spacing: 1px;
`;
