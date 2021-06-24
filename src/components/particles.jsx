import React from "react";
import { Icons } from "./utilities";
import styled, { keyframes } from "styled-components";

export default function Particles() {
  return (
    <React.Fragment>
      <Wrapper>
        <Connect />
        <Gear />
      </Wrapper>
    </React.Fragment>
  );
}

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
