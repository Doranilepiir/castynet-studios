import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <>
      <ContactWrap>
        We are booked out for the <span className="marked">next few weeks</span>{" "}
        but you can reach us via
        <a href="mailto:talk-to@castynet.africa">
          <span className="marked"> talk-to@castynet.africa</span>
        </a>{" "}
        to schedule your project once our schedule opens up.
      </ContactWrap>
    </>
  );
}

const ContactWrap = styled.p`
  font-family: "Teko", sans-serif;
  font-size: 1.5em;
  text-align: center;
  letter-spacing: 1px;
  padding: 0 20px;
`;
