import React from "react";
import * as Styles from "./styles/notFound.styles";
import { Icons, Links } from "./utilities";
import { Link } from "react-router-dom";

export default function NotFound() {
  const external = "noopener noreferrer external";
  const blank = "_blank";

  return (
    <React.Fragment>
      <Styles.Wrapper>
        <p
          className="marked"
          style={{
            fontFamily: '"Roboto Mono", monospace',
          }}>
          <u>Error 404</u>
        </p>
        <p>that page does not exist</p>
        <br />
        <p>
          but you can check out the{" "}
          <Link to="/">
            <span
              className="marked"
              style={{
                background: "rgb(255 20 147 / 20%)",
                border: "1px solid rgb(255 20 147 / 30%)",
                color: "rgb(13 42 255)",
              }}>
              <u>homepage.</u>
            </span>
          </Link>
        </p>
        <Styles.IconsWrap>
          <a href={Links.Github} target={blank} rel={external} title="Visit Castynet's Github">
            <Icons.Github size="25" />
          </a>
          <a href={Links.Behance} target={blank} rel={external} title="Visit Castynet's Behance">
            <Icons.Behance size="25" />
          </a>
          <a href={Links.Twitter} target={blank} rel={external} title="Visit Castynet's Twitter">
            <Icons.Twitter size="25" />
          </a>
          <a href={Links.Pinterest} target={blank} rel={external} title="Visit Castynet's Pinterest">
            <Icons.Pinterest size="25" />
          </a>
          <a href={Links.Instagram} target={blank} rel={external} title="Visit Castynet's Instagram">
            <Icons.Instagram size="25" />
          </a>
        </Styles.IconsWrap>
      </Styles.Wrapper>
    </React.Fragment>
  );
}
