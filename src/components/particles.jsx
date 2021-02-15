import React from "react";
import { Icons } from "./utilities";
import styled, { keyframes } from "styled-components";

export default function Particles() {
  return (
    <>
      <Wrapper>
        <Connect />
        <Gear />
        <Cloud />
      </Wrapper>
    </>
  );
}

const cloudAnimation = keyframes`
  0%{
    left: 0;
    width: 20px;
  }
  50% { 
    width: 40px;
    opacity: .3;}
  100%{
    left: 100%;
    width: 20px;
  }
`;

const gearAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }`;

const Connect = styled(Icons.Connect)`
  width: 20px;
  animation-name: ${gearAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  color: #2196f3;
  position: absolute;
  left: ${getPositionL()};
  top: ${getPositionT()};
  opacity: 0.3;
`;

const Gear = styled(Icons.Gear)`
  width: 20px;
  animation-name: ${gearAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  color: #ff0057;
  position: absolute;
  left: ${getPositionL()};
  top: ${getPositionT()};
  opacity: 0.3;
`;

const Cloud = styled(Icons.Cloud)`
  width: 20px;
  animation-name: ${cloudAnimation};
  animation-duration: 10s;
  animation-iteration-count: 3;
  animation-timing-function: ease-in-out;
  animation-delay: 8s;
  color: #88a;
  position: absolute;
  left: 0%;
  top: 10%;
  opacity: 0.3;
  @media (max-width: 425px) {
    animation-duration: 5s;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  overflow: hidden;
  z-index: -99;
`;

function getPositionL() {
  const min = 30,
    max = 95;
  return Math.random() * (max - min) + min + "%";
}

function getPositionT() {
  const min = 0,
    max = 100;
  return getPosition(min, max);
}

function getPosition(min, max) {
  return Math.random() * (max - min) + min + "%";
}
