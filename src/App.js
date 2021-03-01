import React, { useState } from "react";
import styled from "styled-components";
import { Icons } from "./components/utilities";
import Intro from "./components/intro";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";

export default function App() {
  const [openProjects, setOpenProjects] = useState(false);
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
      <div className="animate">
        <Intro />

        {/* 🟢 Start Projects */}
        <Title onClick={() => toggleOpen(openProjects, setOpenProjects)}>
          <Icons.Dash size="30" />
          <LineBg>projects</LineBg>
          <RtProjects />
        </Title>
        <ContentWrap show={openProjects}>
          <Projects />
        </ContentWrap>
        {/* 🔴 End Projects */}
        {/* 🟢 Start Contact */}
        <Title onClick={() => toggleOpen(openContact, setOpenContact)}>
          <Icons.Dash size="30" />
          <LineBg>get in touch</LineBg>
          <RtContact />
        </Title>
        <ContentWrap show={openContact}>
          <Contact />
        </ContentWrap>
        {/* 🔴 End Contact */}
        {/* 🟢 Start About */}
        <Title>
          <Icons.Dash size="30" />
          <LineBg>about</LineBg>
        </Title>
        <ContentWrap show="true">
          <About />
        </ContentWrap>
        {/* 🔴 End About */}
        <Footer />
      </div>
    </>
  );
}

const Rotate = styled(Icons.Expand)`
  width: 30px;
  color: #607d8b;
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
  color: #005d8a;
  font-family: "Roboto Mono", monospace;
  &:hover {
    cursor: pointer;
  }
`;
