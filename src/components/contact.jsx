import React, { useState } from "react";
import styled from "styled-components";
import { Sending, Sent, Error } from "./alert";

export default function Contact() {
  const [alertMsg, setAlertMsg] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [ref, setRef] = useState("");

  var postData = {
    Email: email,
    Name: name,
    Phone: phone,
    Message: message,
    Reference: ref,
  };

  const HandleSubmit = (evt) => {
    evt.preventDefault();
    sendMessage();
  };

  const sendMessage = async () => {
    setAlertMsg("Sending");
    try {
      await fetch(
        "https://contact.api.castynet.africa/api/forms/submit/StudiosContact?token=account-8e89bdf2d0aedf7cc73fe83b4f5ee1",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            form: postData,
          }),
        }
      ).then(function (result) {
        if (result.status === 200) {
          setAlertMsg("Sent");
        }
      });
    } catch (err) {
      setAlertMsg("Error");
    }
  };

  function Alert() {
    switch (alertMsg) {
      case "Sending":
        setTimeout(ClearAlert, 20000);
        return <Sending />;
      case "Sent":
        setTimeout(ClearAlert, 6000);
        return <Sent />;
      case "Error":
        setTimeout(ClearAlert, 10000);
        return <Error />;
      default:
        return "";
    }
    function ClearAlert() {
      setAlertMsg("");
    }
  }

  return (
    <>
      <Alert />
      <ContactWrap>
        <ContactForm autocomplete="on" onSubmit={HandleSubmit}>
          <label htmlFor="reference">RE:</label>
          <select
            id="reference"
            onChange={(e) => setRef(e.target.value)}
            required
          >
            <FirstOption />
            <option>Website Development</option>
            <option>Mobile App Dev</option>
            <option>UI/UX Design</option>
            <option>Graphic Design</option>
            <option>Brand Development</option>
            <option>Other</option>
          </select>

          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="tel">Phone-Nº:</label>
          <input
            id="tel"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="message">Message:</label>
          <Message
            id="message"
            type="text"
            required
            onChange={(e) => setMessage(e.target.value)}
          />

          <input type="submit" value="Send" />
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
const FirstOption = styled.option`
  display: none;
`;

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
  border-bottom: 2px solid #2196f3;
  font-size: 1.2em;
  width: 100%;
  resize: vertical;
  font-family: "Roboto", sans-serif;
`;

const ContactDetails = styled.address`
  background-color: rgb(158 158 158 / 0.4);
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
  background-color: rgb(158 158 158 / 0.4);
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
    border-bottom: 2px solid #2196f3;
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

  select {
    width: 100%;
    font-size: 1.2rem;
    height: 40px;
    background: #fff;
    line-height: 5px;
    box-shadow: none;
    border-width: 0;
    border-bottom: 2px solid #2196f3;
    outline: none;
    margin: 10px 0;
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
  gap: 10px;
`;
