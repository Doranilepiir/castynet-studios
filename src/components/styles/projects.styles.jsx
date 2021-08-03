import styled from "styled-components";
import { Icons } from "../utilities";

export const Image = styled.img`
  width: 100%;
`;

export const Badge = styled(Icons.Check)`
  color: #00a700;
  padding: 0 10px 0 0;
`;

export const ProjectWrapper = styled.div`
  background-color: #fff;
  width: 190px;
  padding: 10px;
  border-radius: 2px;
  margin: 10px;
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.38), 0 2px 10px 0 rgba(0, 0, 0, 0.38);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  grid-auto-flow: column;
  padding: 2.5em;
  background-color: rgb(0 0 0 / 0.45);
`;

export const Button = styled.button`
  text-align: center;
  margin: 0 0 1em 0;
  text-transform: lowercase;
  font-size: 0.9em;
  color: #1f2762;
  font-family: "Roboto Mono", monospace;
  transition: all 0.2s ease;

  .no-underline {
    padding-left: 7px;
  }

  &:before {
    content: "";
    width: 100px;
    background-color: #ff1493;
    height: 8px;
    position: absolute;
    margin-top: 10px;
    opacity: 0;
  }

  &:hover:before {
    opacity: 0.3;
  }

  &:hover {
    color: #ff1493;
  }
`;

export const Type = styled.p`
  margin: 0.5em 0 0.3em 0;
  font-family: "Teko", sans-serif;
  font-size: 1.4em;
`;
