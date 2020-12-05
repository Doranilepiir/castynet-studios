import React, { useState } from "react";
import styled from "styled-components";

export default function Contact() {
  const [alertMsg, setAlertMsg] = useState("");

  const HandleSubmit = (evt) => {
    evt.preventDefault();
    sendMessage();
  };

  const sendMessage = async () => {
    setAlertMsg("Creating");
    try {
      // await
    } catch (err) {
      // show error
    }
  };

  return (
    <>
      <ContactWrap>
        <ContactForm autocomplete="on" onSubmit={HandleSubmit}>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" required />

          <label htmlFor="email">Email:</label>
          <input id="email" type="email" required />

          <label htmlFor="tel">Phone-Nº:</label>
          <input id="tel" type="tel" />

          <label htmlFor="message">Message:</label>
          <Message id="message" type="text" required />

          <input type="submit" value="Submit" />
        </ContactForm>
        <ContactDetails>
          <Detail>
            <a href="mailto:talk-to@castynet.africa">
              Email: <U>talk-to@castynet.africa</U>
            </a>
          </Detail>
          <Detail>
            <a href="tel:+254743665574">
              Phone: <U>+254 743 665 574</U>
            </a>
          </Detail>
          <Detail>
            Location:{"  "}
            <u>Online &amp; Around the Planet</u>
          </Detail>
        </ContactDetails>
      </ContactWrap>
    </>
  );
}

// Logic

// Styles
const U = styled.span`
  color: #ff0057;
  text-decoration: underline;

  &:hover {
    color: #0176d3;
  }
`;

const Detail = styled.div`
  padding: 8px 0;
`;

const Message = styled.textarea`
  height: 80px;
  margin: 10px 0;
  border: none;
  outline: none !important;
  padding: 2px;
  border-bottom: 2px solid #000;
  font-size: 1.2em;
  width: 100%;
  resize: vertical;
`;

const ContactDetails = styled.address`
  background-color: rgb(206 233 255 / 80%);
  padding: 40px 30px 50px;
  width: 340px;
  height: fit-content;
  margin: 0 0 1.8em 0;
  font-size: 1.3em;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    background-color: rgb(206 233 255 / 80%);
  }
  a {
    padding: 0 0 0 10px;
    text-decoration: none;
    color: #000;
  }
`;

const ContactForm = styled.form`
  background-color: rgb(206 233 255 / 80%);
  padding: 20px 20px 30px 20px;
  width: 380px;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    background-color: rgb(206 233 255 / 90%);
  }

  input {
    margin: 10px 0;
    border: none;
    outline: none !important;
    padding: 2px;
    width: 100%;
    height: 35px;
    border-bottom: 2px solid #000;
    font-size: 1.2em;
  }
  label {
    padding: 5px 0 0 10px;
    cursor: pointer;
  }

  input[type="submit" i] {
    margin: 0 0 10px 0;
    padding: 10px;
    background-color: #444;
    color: #fff;
    cursor: pointer;
    letter-spacing: 1px;
    font-size: 1.1em;
    border-bottom: none;
    height: 45px;
    &:hover {
      background-color: #2196f3;
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
        0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
    }
  }

  input,
  label,
  input[type="submit" i] {
    display: block;
  }
`;

const ContactWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.8em;
`;
