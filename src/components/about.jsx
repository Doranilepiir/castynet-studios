import React from "react";
import styled from "styled-components";
import { Icons, Links } from "./utilities";

export default function About() {
  const external = "noopener noreferrer external";
  const blank = "_blank";

  return (
    <React.Fragment>
      <Wrapper>
        <AboutDescription>
          Castynet is a small team of <span className="marked">Software Developers</span> based in{" "}
          <span className="marked">Nairobi KE,</span> We are high spirited geeks passionate about tech.
          <br />
          Our mission is to create <span className="marked">Empowering Software</span> across the{" "}
          <span className="marked">Web.</span> We are powered by coffee, unreal imagination and attention
          to detail. <br />
          If you have a project you think would be a fit for us do{" "}
          <a href="mailto:talk-to@castynet.africa" title="Email Castynet">
            <span
              className="marked"
              style={{
                background: "rgb(255 20 147 / 20%)",
                border: "1px solid rgb(255 20 147 / 30%)",
                color: "rgb(13 42 255)",
              }}>
              <u>reach out.</u>
            </span>
          </a>
        </AboutDescription>
        <Rating>
          <ListTitle>appraised at</ListTitle>
          <a
            href={Links.GoogleListing}
            target={blank}
            rel={external}
            title="See Castynet's Rating on Google">
            <li>
              5/5 Star on Google <Icons.Link size="17" />
            </li>
          </a>
        </Rating>
        <Stats>
          <ListTitle>the numbers</ListTitle>
          <a href={Links.Github} target={blank} rel={external} title="Visit Castynet's Github">
            <li>
              931,019 lines of code <Icons.Github size="20" />
            </li>
          </a>
          <a href={Links.Instagram} target={blank} rel={external} title="Visit Castynet's Instagram">
            <li>
              1.6k Peers <Icons.Instagram size="20" />
            </li>
          </a>
          <a href={Links.Twitter} target={blank} rel={external} title="Visit Castynet's Twitter">
            <li>
              285 Tweets <Icons.Twitter size="20" />
            </li>
          </a>
        </Stats>
        <Services>
          <ListTitle>masters of</ListTitle>
          <li>Web Development</li>
          <li>Web Design</li>
          <li>Wordpress</li>
          <li>UI/UX Design</li>
          <li>Graphic Design</li>
        </Services>
        <Technologies>
          <ListTitle>dev kit</ListTitle>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>NodeJS</li>
          <li>Headless CMS/s</li>
          <li>Illustrator</li>
          <li>PhotoShop</li>
          <li>React Native</li>
        </Technologies>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  font-family: "Teko", sans-serif;
  letter-spacing: 1px;
  font-size: 1.4em;
`;

const AboutDescription = styled.main`
  padding: 0 20px;
  line-height: 1.5em;
  font-size: 1.1em;
  text-align: center;
`;

const Rating = styled.ul`
  padding: 20px 0 10px 20px;
  li {
    display: inline-block;
    padding: 1px 10px;
    margin: 5px;
    border-radius: 3px;
    background-color: #304d5b;
    color: #fff;
    font-weight: 300;
    transition: all 0.2s ease;
  }
  a li:hover {
    background-color: #ff1493;
  }
`;

const ListTitle = styled.li`
  background-color: #fff !important;
  width: 120px;
  text-align: center;
  color: #304d5b !important;
  border: solid 1px #304d5b;
  padding: 1px !important;
  font-weight: normal !important;
  letter-spacing: 0 !important;
`;

const Services = styled.ul`
  padding: 10px 0 10px 20px;
  li {
    display: inline-block;
    padding: 1px 10px;
    margin: 5px;
    border-radius: 3px;
    background-color: #304d5b;
    color: #fff;
    font-weight: 300;
  }
  li:hover {
    cursor: default;
  }
`;

const Technologies = styled.ul`
  padding: 10px 0 10px 20px;
  li {
    display: inline-block;
    padding: 1px 10px;
    margin: 5px;
    border-radius: 3px;
    background-color: #304d5b;
    color: #fff;
    font-weight: 300;
  }
  li:hover {
    cursor: default;
  }
`;

const Stats = styled.ul`
  padding: 10px 0 10px 20px;
  li {
    display: inline-block;
    padding: 1px 10px;
    margin: 5px;
    border-radius: 3px;
    background-color: #304d5b;
    color: #fff;
    font-weight: 300;
    transition: all 0.2s ease;
  }
  a li:hover {
    background-color: #ff1493;
  }
`;
