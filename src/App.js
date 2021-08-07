import React, { useRef, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as Styled from "./app.styles.jsx";
import { Icons } from "./components/utilities";

import Intro from "./components/intro";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import NotFound from "./components/notFound";

export default function App() {
  let eProject = useRef(null),
    eContact = useRef(null),
    eAbout = useRef(null);

  const HomePage = (props) => {
    useEffect(() => {
      if (props.location.state !== undefined && props.location.state.by === "About") {
        eAbout.current.scrollIntoView(true);
      }
    }, [props.location.state]);

    const scIntoView = (e) => {
      eAbout.current.scrollIntoView(true);
    };

    return (
      <React.Fragment>
        <main>
          <section aria-label="Projects">
            <Link to="/projects">
              <Styled.Title>
                <Icons.Dash size="20" />
                <Styled.LineBg>projects</Styled.LineBg>
                <Icons.Expand size="30" color="#ff1493" />
              </Styled.Title>
            </Link>
          </section>
          <section aria-label="Contact">
            <Link to="/contact">
              <Styled.Title>
                <Icons.Dash size="20" />
                <Styled.LineBg>get in touch</Styled.LineBg>
                <Icons.Expand size="30" color="#ff1493" />
              </Styled.Title>
            </Link>
          </section>
          <section aria-label="About">
            <Styled.Title onClick={() => scIntoView(eAbout)}>
              <Icons.Dash size="20" />
              <Styled.LineBg ref={eAbout}>about</Styled.LineBg>
            </Styled.Title>
            <About />
          </section>
        </main>
      </React.Fragment>
    );
  };

  const ProjectsRoute = () => {
    useEffect(() => {
      eProject.current.scrollIntoView(true);
    }, []);

    return (
      <React.Fragment>
        <main>
          <section aria-label="Projects">
            <Styled.Title>
              <Icons.Dash size="20" />
              <Styled.LineBg ref={eProject}>projects &amp; partners</Styled.LineBg>
            </Styled.Title>
            <Projects />
          </section>
          <section aria-label="Contact">
            <Link to="/contact">
              <Styled.Title>
                <Icons.Dash size="20" />
                <Styled.LineBg>get in touch</Styled.LineBg>
                <Icons.Expand size="30" color="#ff1493" />
              </Styled.Title>
            </Link>
          </section>
          <section aria-label="About">
            <Link
              to={{
                pathname: "/",
                state: { by: "About" },
              }}>
              <Styled.Title>
                <Icons.Dash size="20" />
                <Styled.LineBg ref={eAbout}>about</Styled.LineBg>
                <Icons.Expand size="30" color="#ff1493" />
              </Styled.Title>
            </Link>
          </section>
        </main>
      </React.Fragment>
    );
  };

  const ContactRoute = () => {
    useEffect(() => {
      eContact.current.scrollIntoView(true);
    }, []);

    return (
      <React.Fragment>
        <main>
          <section aria-label="Projects">
            <Link to="/projects">
              <Styled.Title>
                <Icons.Dash size="20" />
                <Styled.LineBg>projects</Styled.LineBg>
                <Icons.Expand size="30" color="#ff1493" />
              </Styled.Title>
            </Link>
          </section>
          <section aria-label="Contact">
            <Styled.Title>
              <Icons.Dash size="20" />
              <Styled.LineBg ref={eContact}>get in touch</Styled.LineBg>
            </Styled.Title>
            <Contact />
          </section>
          <section aria-label="About">
            <Link
              to={{
                pathname: "/",
                state: { by: "About" },
              }}>
              <Styled.Title>
                <Icons.Dash size="20" />
                <Styled.LineBg ref={eAbout}>about</Styled.LineBg>
                <Icons.Expand size="30" color="#ff1493" />
              </Styled.Title>
            </Link>
          </section>
        </main>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Router>
        <Intro />
        <Switch>
          <Route path="/contact" component={ContactRoute} />
          <Route path="/projects" component={ProjectsRoute} />
          <Route path="/" component={HomePage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}
