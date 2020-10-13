import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <>
      <Services>
        <li>Web Design</li>
        <li>Software Development</li>
        <li>UI/UX Design</li>
        <li>Web Development</li>
        <li>Graphic Design</li>
      </Services>
      <p>
        Castynet is a small team of software developers based in Nairobi KE. We
        are high spirited geeks passionate about tech. Our mission is to create
        empowering software across the web and android platforms. We are powered
        by coffee, unreal imagination &amp; attention to detail. If you have a
        project that you think would be a great fit for us do reach out. "The
        most important aspect of any software system is that its usable" –
        someone at Castynet.
      </p>
    </>
  );
}

const Services = styled.ul``;
