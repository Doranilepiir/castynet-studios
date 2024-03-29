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
          Castynet is a small team of{" "}
          <span className="marked">Software Developers</span> based in{" "}
          <span className="marked">Nairobi KE,</span> We are high spirited geeks
          passionate about tech.
          <br />
          Our mission is to create{" "}
          <span className="marked">Empowering Software</span> across the{" "}
          <span className="marked">Web.</span> We are powered by coffee, unreal
          imagination and attention to detail. <br />
          If you have a project you think would be a fit for us do{" "}
          <a href="mailto:talk-to@castynet.africa" title="Email Castynet">
            <span
              className="marked"
              style={{
                background: "rgb(255 20 147 / 20%)",
                border: "1px solid rgb(255 20 147 / 30%)",
                color: "rgb(13 42 255)",
              }}
            >
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
            title="See Castynet's Rating on Google"
          >
            <dd>
              5/5 Star on Google <Icons.Link size="17" />
            </dd>
          </a>
        </Rating>
        <Stats>
          <ListTitle>the numbers</ListTitle>
          <a
            href={Links.Github}
            target={blank}
            rel={external}
            title="Visit Castynet's Github"
          >
            <dd>
              931,019 lines of code <Icons.Github size="20" />
            </dd>
          </a>
          <a
            href={Links.Instagram}
            target={blank}
            rel={external}
            title="Visit Castynet's Instagram"
          >
            <dd>
              1.6k Peers <Icons.Instagram size="20" />
            </dd>
          </a>
          <a
            href={Links.Twitter}
            target={blank}
            rel={external}
            title="Visit Castynet's Twitter"
          >
            <dd>
              285 Tweets <Icons.Twitter size="20" />
            </dd>
          </a>
        </Stats>
        <Services>
          <ListTitle>masters of</ListTitle>
          <dd>Web Development</dd>
          <dd>Web Design</dd>
          <dd>Wordpress</dd>
          <dd>UI/UX Design</dd>
          <dd>Graphic Design</dd>
        </Services>
        <Technologies>
          <ListTitle>dev kit</ListTitle>
          <dd>JavaScript</dd>
          <dd>ReactJS</dd>
          <dd>NodeJS</dd>
          <dd>Headless CMS/s</dd>
          <dd>Illustrator</dd>
          <dd>PhotoShop</dd>
          <dd>React Native</dd>
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

const Rating = styled.dl`
  padding: 20px 0 10px 20px;
  dd {
    display: inline-block;
    padding: 1px 10px;
    margin: 5px;
    border-radius: 3px;
    background-color: #304d5b;
    color: #fff;
    font-weight: 300;
    transition: all 0.2s ease;
  }
  a dd:hover {
    background-color: #ff1493;
  }
`;

const ListTitle = styled.dt`
  display: inline-block;
  background-color: #fff !important;
  width: 120px;
  text-align: center;
  color: #304d5b !important;
  border: solid 1px #304d5b;
  padding: 1px !important;
  font-weight: normal !important;
  letter-spacing: 0 !important;
`;

const Services = styled.dl`
  padding: 10px 0 10px 20px;
  dd {
    display: inline-block;
    padding: 1px 10px;
    margin: 5px;
    border-radius: 3px;
    background-color: #304d5b;
    color: #fff;
    font-weight: 300;
  }
  dd:hover {
    cursor: default;
  }
`;

const Technologies = styled.dl`
  padding: 10px 0 10px 20px;
  dd {
    display: inline-block;
    padding: 1px 10px;
    margin: 5px;
    border-radius: 3px;
    background-color: #304d5b;
    color: #fff;
    font-weight: 300;
  }
  dd:hover {
    cursor: default;
  }
`;

const Stats = styled.dl`
  padding: 10px 0 10px 20px;
  dd {
    display: inline-block;
    padding: 1px 10px;
    margin: 5px;
    border-radius: 3px;
    background-color: #304d5b;
    color: #fff;
    font-weight: 300;
    transition: all 0.2s ease;
  }
  a dd:hover {
    background-color: #ff1493;
  }
`;
