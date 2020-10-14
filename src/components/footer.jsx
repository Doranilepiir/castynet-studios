import React from "react";
import styled from "styled-components";
import { Icons, Links } from "./utilities";

export default function Footer() {
  const external = "noopener noreferrer external";
  const blank = "_blank";

  return (
    <>
      <p>&#169; 2018 - 2020 Castynet&#8482; Studios - a Software Engine</p>
      <IconsWrap>
        <a href={Links.Github} target={blank} rel={external}>
          <Icons.Github />
        </a>
        <a href={Links.Behance} target={blank} rel={external}>
          <Icons.Behance />
        </a>
        <a href={Links.Twitter} target={blank} rel={external}>
          <Icons.Twitter />
        </a>
        <a href={Links.Pinterest} target={blank} rel={external}>
          <Icons.Pinterest />
        </a>
        <a href={Links.Instagram} target={blank} rel={external}>
          <Icons.Instagram />
        </a>
      </IconsWrap>
    </>
  );
}

const IconsWrap = styled.div``;
