import React from "react";
import styled from "styled-components";
import { Icons, Links } from "./utilities";

export default function Footer() {
  const external = "noopener noreferrer external";
  const blank = "_blank";

  return (
    <>
      <Wrapper>
        <p>&#169; 2018 - 2020 Castynet Studios - Empowering Software</p>
        <IconsWrap>
          <a href={Links.Github} target={blank} rel={external}>
            <Icons.Github size="25" />
          </a>
          <a href={Links.Behance} target={blank} rel={external}>
            <Icons.Behance size="25" />
          </a>
          <a href={Links.Twitter} target={blank} rel={external}>
            <Icons.Twitter size="25" />
          </a>
          <a href={Links.Pinterest} target={blank} rel={external}>
            <Icons.Pinterest size="25" />
          </a>
          <a href={Links.Instagram} target={blank} rel={external}>
            <Icons.Instagram size="25" />
          </a>
        </IconsWrap>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: rgb(33 150 243 / 0.1);
  padding: 25px 0;

  p {
    color: #000033;
    font-weight: 600;
    text-align: center;
    text-transform: lowercase;
    width: 100%;
  }
`;

const IconsWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-content: center;
  gap: 15px;
  max-width: 200px;
  margin: 15px auto 0 auto;
  border-top: 1px solid #ff5722;
  padding: 5px 20px 0 20px;

  a {
    color: #ff0057;

    &:hover {
      color: #0176d3;
    }
  }
`;
