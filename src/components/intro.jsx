import React, { Component } from "react";
import styled from "styled-components";

export default class Intro extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Title>Castynet Studios</Title>
          <Description>Empowering Software</Description>
          <Text>
            we create <span className="marked">elegant software products</span>{" "}
            for the <span className="marked">web.</span>
          </Text>
        </Wrapper>
      </>
    );
  }
}
const Text = styled.p`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5em;
`;

const Wrapper = styled.div`
  margin: 100px auto 50px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3em;
  letter-spacing: 2px;
  color: rgb(31, 39, 98);
  padding-bottom: 10px;
`;

const Description = styled.h2`
  font-size: 2.5em;
  letter-spacing: 1px;
  color: #607d8b;
  font-weight: 400;
  font-family: "Teko", sans-serif;
  padding-bottom: 10px;
`;
