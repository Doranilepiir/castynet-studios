import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <React.Fragment>
      <ContactWrap>
        We are booked out for the <span className="marked">next few weeks</span> but you can reach us via{" "}
        <a href="mailto:talk-to@castynet.africa" title="Email Castynet">
          <span
            className="marked"
            style={{
              background: "rgb(255 20 147 / 20%)",
              border: "1px solid rgb(255 20 147 / 30%)",
              color: "rgb(13 42 255)",
            }}>
            talk-to@castynet.africa
          </span>
        </a>{" "}
        to schedule your project once our schedule opens up.
      </ContactWrap>
    </React.Fragment>
  );
}

const ContactWrap = styled.p`
  font-family: "Teko", sans-serif;
  font-size: 1.5em;
  text-align: center;
  letter-spacing: 1px;
  padding: 0 20px;
`;
