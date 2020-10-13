import React from "react";
import styled from "styled-components";
import { Github } from "@styled-icons/fa-brands/Github";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { LinkOutline } from "@styled-icons/evaicons-outline/LinkOutline";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";

export default function About() {
  return (
    <>
      <AboutDescription>
        Castynet is a small team of <mark>Software Developers</mark> based in{" "}
        <mark>Nairobi KE</mark>.
        <br />
        We are high spirited geeks passionate about tech.
        <br />
        Our mission is to create <mark>Empowering Software</mark> across the{" "}
        <mark>Web</mark> and <mark>Android</mark> platforms.
        <br />
        We are powered by coffee, unreal imagination and attention to detail.
        <br />
        If you have a project that you think would be a great fit for us do{" "}
        <mark>reach out</mark>.
      </AboutDescription>
      <Rating>
        <ListTitle>Rating</ListTitle>
        <a
          href="https://go.genztech.xyz/google_listing"
          target="_blank"
          rel="noopener noreferrer external"
        >
          <li>
            5/5 Star on Google <LinkOutline size="20" />
          </li>
        </a>
      </Rating>
      <Stats>
        <ListTitle>Stats</ListTitle>
        <a
          href="https://go.genztech.xyz/Github"
          target="_blank"
          rel="noopener noreferrer external"
        >
          <li>
            &cong; 847,030 lines of code <Github size="20" />
          </li>
        </a>
        <a
          href="https://go.genztech.xyz/instagram"
          target="_blank"
          rel="noopener noreferrer external"
        >
          <li>
            1.8k Supporters <Instagram size="20" />
          </li>
        </a>
        <a
          href="https://go.genztech.xyz/twitter"
          target="_blank"
          rel="noopener noreferrer external"
        >
          <li>
            970 Tweets <Twitter size="20" />
          </li>
        </a>
      </Stats>
      <Services>
        <ListTitle>Services</ListTitle>
        <li>Web Design</li>
        <li>Software Development</li>
        <li>UI/UX Design</li>
        <li>Web Development</li>
        <li>Graphic Design</li>
      </Services>
      <Technologies>
        <ListTitle>Tools</ListTitle>
        <li>JavaScript</li>
        <li>ReactJs</li>
        <li>NodeJS</li>
        <li>Headless CMS/s</li>
        <li>Illustrator</li>
        <li>PhotoShop</li>
        <li>React Native</li>
        <li>Android</li>
      </Technologies>
    </>
  );
}

const AboutDescription = styled.p`
  font-size: 1.5em;
  padding: 0 20px;
  line-height: 1.5em;
`;

const Rating = styled.ul`
  padding: 20px 0 10px 20px;
  li {
    display: inline-block;
    padding: 5px;
    margin: 5px;
    border-radius: 2px;
    background-color: #006a04;
    color: #fff;
    letter-spacing: 1px;
  }
`;

const ListTitle = styled.li`
  background-color: #ff5722 !important;
  width: 90px;
  text-align: center;
`;

const Services = styled.ul`
  padding: 10px 0 10px 20px;
  li {
    display: inline-block;
    padding: 5px;
    margin: 5px;
    border-radius: 2px;
    background-color: #006a04;
    color: #fff;
    letter-spacing: 1px;
  }
`;
const Technologies = styled.ul`
  padding: 10px 0 10px 20px;
  li {
    display: inline-block;
    padding: 5px;
    margin: 5px;
    border-radius: 2px;
    background-color: #006a04;
    color: #fff;
    letter-spacing: 1px;
  }
`;

const Stats = styled.ul`
  padding: 10px 0 10px 20px;
  li {
    display: inline-block;
    padding: 5px;
    margin: 5px;
    border-radius: 2px;
    background-color: #006a04;
    color: #fff;
    letter-spacing: 1px;
  }
`;
