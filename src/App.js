import React, { useState } from "react";
import styled from "styled-components";
import { Icons } from "./components/utilities";
import Intro from "./components/intro";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Particles from "./components/particles";

export default function App() {
  const [openProjects, setOpenProjects] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  function toggleOpen(state, setState) {
    if (state === true) {
      setState(false);
    } else {
      setState(true);
    }
  }
  function RtProjects() {
    return ShowIcon(openProjects);
  }
  function RtAbout() {
    return ShowIcon(openAbout);
  }
  function RtContact() {
    return ShowIcon(openContact);
  }

  function ShowIcon(open) {
    if (open === true) {
      return <Rotate />;
    } else if (open === false) {
      return <Icons.Expand size="30" color="#ff5722" />;
    }
  }

  return (
    <>
      <Intro />

      <Title onClick={() => toggleOpen(openProjects, setOpenProjects)}>
        <Icons.Dash size="30" />
        <LineBg>projects</LineBg>
        <RtProjects />
      </Title>

      <ContentWrap show={openProjects}>
        <Projects />
      </ContentWrap>

      <Title onClick={() => toggleOpen(openAbout, setOpenAbout)}>
        <Icons.Dash size="30" />
        <LineBg>about</LineBg>
        <RtAbout />
      </Title>

      <ContentWrap show={openAbout}>
        <About />
      </ContentWrap>

      <Title onClick={() => toggleOpen(openContact, setOpenContact)}>
        <Icons.Dash size="30" />
        <LineBg>get in touch</LineBg>
        <RtContact />
      </Title>

      <ContentWrap show={openContact}>
        <Contact />
      </ContentWrap>

      <Footer />
      <Particles />
    </>
  );
}

const Rotate = styled(Icons.Expand)`
  width: 30px;
  color: #ff5722;
  transform: rotate(180deg);
`;

const ContentWrap = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

const LineBg = styled.span`
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

const Title = styled.h2`
  margin: 1em 0 1em 2em;
  font-size: 1.8em;
  width: fit-content;
  color: #1f2762;
  &:hover {
    cursor: pointer;
  }
`;
