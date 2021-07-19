import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 10px;
  text-align: center;
  margin: 0;
  position: relative;
  line-height: 25px;
  font-size: 1.5em;
  font-family: "Teko", sans-serif;
  letter-spacing: 0.5px;
`;

export const IconsWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-content: center;
  gap: 15px;
  max-width: 200px;
  margin: 5px auto 0 auto;
  border-top: 1px solid #1f2762;
  padding: 5px 20px 0 20px;

  a {
    color: #1f2762;

    &:hover {
      color: #ff69b4;
    }
  }
`;
