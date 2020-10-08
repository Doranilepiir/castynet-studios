import React, { Component } from "react";
import styled from "styled-components";
import digikidsImg from "../static/digikids_logo.png";
import gadgetbuffsImg from "../static/gadgetbuffs_logo.png";
import genztechImg from "../static/genztech_logo.png";

export default class Projects extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <ProjectWrapper>
            <Image src={digikidsImg} alt="Digikids Logo" />
            <Button as="a" href="/">
              View Project
            </Button>
          </ProjectWrapper>
          <ProjectWrapper>
            <Image src={gadgetbuffsImg} alt="Gadgetbuffs Logo" />
            <Button as="a" href="/">
              View Project
            </Button>
          </ProjectWrapper>
          <ProjectWrapper>
            <Image src={genztechImg} alt="Genztech Logo" />
            <Button as="a" href="/">
              View Project
            </Button>
          </ProjectWrapper>
        </Wrapper>
      </>
    );
  }
}

const ProjectWrapper = styled.div``;

const Wrapper = styled.div``;

const Button = styled.button``;

const Image = styled.img``;
