import React, { useRef } from "react";

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
  // element.current.scrollIntoView(true);
  // <Styled.Rotate /> : <Icons.Expand size="30" color="#ff1493" />

  let eProject = useRef(null),
    eContact = useRef(null);

  const HomePage = () => {
    console.log("home");
    return (
      <React.Fragment>
        <main>
          <section aria-label="Projects">
            <Link to="/projects">
              <Styled.Title>
                <Icons.Dash size="20" />
                <Styled.LineBg ref={eProject}>projects</Styled.LineBg>
              </Styled.Title>
            </Link>
          </section>
          <section aria-label="Contact">
            <Link to="/contact">
              <Styled.Title>
                <Icons.Dash size="20" />
                <Styled.LineBg ref={eContact}>get in touch</Styled.LineBg>
              </Styled.Title>
            </Link>
          </section>
          <section aria-label="About">
            <Styled.Title abt>
              <Icons.Dash size="20" />
              <Styled.LineBg>about</Styled.LineBg>
            </Styled.Title>
            <About />
          </section>
        </main>
      </React.Fragment>
    );
  };

  const ProjectsRoute = () => {
    console.log("proj");
    return (
      <React.Fragment>
        <main>
          <section aria-label="Projects">
            <Styled.Title>
              <Icons.Dash size="20" />
              <Styled.LineBg ref={eProject}>projects</Styled.LineBg>
            </Styled.Title>
            <Projects />
          </section>
          <section aria-label="Contact">
            <Link to="/contact">
              <Styled.Title>
                <Icons.Dash size="20" />
                <Styled.LineBg ref={eContact}>get in touch</Styled.LineBg>
              </Styled.Title>
            </Link>
          </section>
          <section aria-label="About">
            <Link to="/">
              <Styled.Title abt>
                <Icons.Dash size="20" />
                <Styled.LineBg>about</Styled.LineBg>
              </Styled.Title>
            </Link>
          </section>
        </main>
      </React.Fragment>
    );
  };

  const ContactRoute = () => {
    console.log("cont");
    return (
      <React.Fragment>
        <main>
          <section aria-label="Projects">
            <Link to="/projects">
              <Styled.Title>
                <Icons.Dash size="20" />
                <Styled.LineBg ref={eProject}>projects</Styled.LineBg>
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
            <Link to="/">
              <Styled.Title>
                <Icons.Dash size="20" />
                <Styled.LineBg>about</Styled.LineBg>
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
