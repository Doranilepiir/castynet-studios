import React from "react";
import styled, { keyframes } from "styled-components";
import { LoaderOutline } from "@styled-icons/evaicons-outline/LoaderOutline";
import { AlertTriangle } from "@styled-icons/feather/AlertTriangle";

export function Sending() {
  return (
    <>
      <CreatingWrap>
        <p>Just a sec, Sending the Message...</p>
      </CreatingWrap>
    </>
  );
}

export function Sent() {
  return (
    <>
      <CreatedWrap>
        <p>Great! Message Received, we'll be in-touch Soon</p>
      </CreatedWrap>
    </>
  );
}

export function Error() {
  return (
    <>
      <ErrorWrap>
        Sorry, something went wrong, but you can email us directly at{"  "}
        <mark>talk-to@castynet.africa</mark>
      </ErrorWrap>
    </>
  );
}

export function LoadingTimetable() {
  return (
    <>
      <Wrapper>
        <LoadingTimetableWrap>
          <Rotate>
            <LoaderOutline size="40" />
          </Rotate>
          <p>Hold on a sec, we're Loading the Timetable</p>
        </LoadingTimetableWrap>
      </Wrapper>
    </>
  );
}

export function TimetableEmpty() {
  return (
    <>
      <Wrapper>
        <TimetableEmptyWrap>
          <AlertTriangle size="40" />
          <p>You have no Lessons click 'Create New Lesson' to add Lessons</p>
        </TimetableEmptyWrap>
      </Wrapper>
    </>
  );
}

const Rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

const SlideUp = keyframes`
  from {
    margin-top: 30px;
    opacity: 0.3;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
`;

const Rotate = styled.div`
  animation: ${Rotation} 1.5s infinite linear;
`;

const LoadingTimetableWrap = styled.div`
  background-color: rgb(221 221 255 / 0.95);
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  border: 1px solid #fff;
  letter-spacing: 1px;
  color: #00be08;
  z-index: 99;
  p {
    padding: 20px 0 0 0;
  }
`;

const TimetableEmptyWrap = styled.div`
  background-color: rgb(221 221 255 / 0.95);
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  border: 1px solid #fff;
  letter-spacing: 1px;
  color: #ff5722;
  animation: ${SlideUp} 0.3s linear;
  z-index: 99;
  p {
    padding: 20px 0 0 0;
  }
`;

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 500;
  margin: 20px auto;
  text-align: center;
  width: 100%;
`;

const SlideUpTwo = keyframes`
  from {
    top: 40px;
    opacity: 0.3;
  }
  to {
    top: 10px;
    opacity: 1;
  }
`;

const CreatedWrap = styled.div`
  width: 95%;
  width: fit-content;
  position: sticky;
  margin: 10px 10px 10px auto;
  text-align: center;
  background-color: rgb(255 255 255 / 0.9);
  padding: 12px 55px;
  top: 10px;
  border: #8bc34a solid 2px;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 0 1px 0 rgb(139 195 74 / 0.2), 0 2px 2px 0 rgb(139 195 74 / 0.2);
  z-index: 99;
  animation: ${SlideUpTwo} 0.3s linear;
`;

const CreatingWrap = styled.div`
  width: 95%;
  width: fit-content;
  position: sticky;
  margin: 10px 10px 10px auto;
  text-align: center;
  background-color: rgb(255 255 255 / 0.9);
  padding: 12px 55px;
  top: 10px;
  border: #ffc107 solid 2px;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 0 1px 0 rgb(255 152 0 / 0.2), 0 2px 2px 0 rgb(255 152 0 / 0.2);
  z-index: 99;
  animation: ${SlideUpTwo} 0.3s linear;
`;

const ErrorWrap = styled.div`
  width: 95%;
  width: fit-content;
  position: sticky;
  margin: 10px 10px 10px auto;
  text-align: center;
  background-color: rgb(255 255 255 / 0.9);
  padding: 12px 55px;
  top: 10px;
  border: #ff5722 solid 2px;
  border-radius: 4px;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 0 1px 0 rgb(139 195 74 / 0.2), 0 2px 2px 0 rgb(139 195 74 / 0.2);
  z-index: 99;
  animation: ${SlideUpTwo} 0.3s linear;
`;
