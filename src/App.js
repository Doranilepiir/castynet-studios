import React, { useState, useRef } from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import * as Styled from "./app.styles.jsx";
import { Icons } from "./components/utilities";

import Intro from "./components/intro";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import NotFound from "./components/notFound";

export default function App() {
  const [openProjects, setOpenProjects] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  let eProject = useRef(null),
    eContact = useRef(null);

  let toggleOpen = (state, setState, element) => {
    if (state === true) {
      element.current.scrollIntoView(false);
      setState(false);
    } else {
      element.current.scrollIntoView(true);
      setState(true);
    }
  };

  let ShowIcon = (open) =>
    open === true ? <Styled.Rotate /> : <Icons.Expand size="30" color="#ff1493" />;
  let RtProjects = () => ShowIcon(openProjects);
  let RtContact = () => ShowIcon(openContact);

  const HomePage = () => {
    return (
      <React.Fragment>
        <main>
          <Intro />
          <section aria-label="Projects">
            <Styled.Title onClick={() => toggleOpen(openProjects, setOpenProjects, eProject)}>
              <Icons.Dash size="20" />
              <Styled.LineBg ref={eProject}>projects</Styled.LineBg>
              <RtProjects />
            </Styled.Title>
            <Styled.ContentWrap aria-hidden={!openProjects} show={openProjects}>
              <Projects />
            </Styled.ContentWrap>
          </section>
          <section aria-label="Contact">
            <Styled.Title onClick={() => toggleOpen(openContact, setOpenContact, eContact)}>
              <Icons.Dash size="20" />
              <Styled.LineBg ref={eContact}>get in touch</Styled.LineBg>
              <RtContact />
            </Styled.Title>
            <Styled.ContentWrap aria-hidden={!openContact} show={openContact}>
              <Contact />
            </Styled.ContentWrap>
          </section>
          <section aria-label="About">
            <Styled.Title about>
              <Icons.Dash size="20" />
              <Styled.LineBg>about</Styled.LineBg>
            </Styled.Title>
            <Styled.ContentWrap aria-label="about" show="true">
              <About />
            </Styled.ContentWrap>
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
