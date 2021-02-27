import React from "react";
import styled from "styled-components";
import { Icons, Links } from "./utilities";
import { Year } from "./helpers";

export default function Footer() {
  const external = "noopener noreferrer external";
  const blank = "_blank";

  return (
    <>
      <Wrapper>
        <p>&#169; 2018 - {Year()} Castynet Studios - Empowering Software</p>
        <IconsWrap>
          <a
            href={Links.Github}
            target={blank}
            rel={external}
            aria-label="Github"
          >
            <Icons.Github size="25" />
          </a>
          <a
            href={Links.Behance}
            target={blank}
            rel={external}
            aria-label="Behance"
          >
            <Icons.Behance size="25" />
          </a>
          <a
            href={Links.Twitter}
            target={blank}
            rel={external}
            aria-label="Twitter"
          >
            <Icons.Twitter size="25" />
          </a>
          <a
            href={Links.Pinterest}
            target={blank}
            rel={external}
            aria-label="Pinterest"
          >
            <Icons.Pinterest size="25" />
          </a>
          <a
            href={Links.Instagram}
            target={blank}
            rel={external}
            aria-label="Instagram"
          >
            <Icons.Instagram size="25" />
          </a>
        </IconsWrap>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.footer`
  background-color: #1f2762;
  padding: 25px 0;
  margin-top: 40px;

  p {
    color: #fff;
    font-weight: 600;
    text-align: center;
    text-transform: lowercase;
    width: 100%;
    letter-spacing: 1px;
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
    color: #ffeb3b;

    &:hover {
      color: #ff5722;
    }
  }
`;
