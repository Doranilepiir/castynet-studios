import styled from "styled-components";
import { Icons } from "./components/utilities";

export const Rotate = styled(Icons.Expand)`
  width: 30px;
  color: #607d8b;
  transform: rotate(180deg);
`;

export const LineBg = styled.span`
  display: inline-block;
  padding-right: 5px;

  &:after {
    content: "";
    display: block;
    height: 7px;
    opacity: 20%;
    z-index: -10;
    background-color: #333;
    margin-left: 1em;
    margin-top: -0.6em;
    border-radius: 1px;
  }
`;

export const Title = styled.h2`
  margin: 1em 0 1em 1em;
  font-size: 1.4em;
  width: fit-content;
  color: #1f2762;
  font-family: "Roboto Mono", monospace;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    color: #ff1493;
  }
`;
