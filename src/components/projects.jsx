import React from "react";
import styled from "styled-components";
import { ProjectsData } from "./utilities";

export default function Projects() {
  const projects = ProjectsData.items;

  return (
    <>
      <Wrapper>
        {projects.map((projects) => (
          <ProjectWrapper key={projects.id}>
            <Image src={projects.imgLink} alt={projects.description} />
            <Button as="a" href="/">
              View Project
            </Button>
          </ProjectWrapper>
        ))}
      </Wrapper>
    </>
  );
}

const ProjectWrapper = styled.div``;

const Wrapper = styled.div``;

const Button = styled.button``;

const Image = styled.img``;
