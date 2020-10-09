import React from "react";
import styled from "styled-components";
import { ProjectsData } from "./utilities";
import { BadgeCheck } from "@styled-icons/boxicons-regular/BadgeCheck";

export default function Projects() {
  const projects = ProjectsData.items;

  return (
    <>
      <Wrapper>
        {projects.map((projects) => (
          <ProjectWrapper key={projects.id}>
            <Name>
              <Badge size="20" />
              {projects.name}
            </Name>
            <Type>{projects.type}</Type>
            <Button as="a" href={projects.link}>
              View Project
            </Button>
          </ProjectWrapper>
        ))}
      </Wrapper>
    </>
  );
}

const Badge = styled(BadgeCheck)`
  color: #00a700;
  padding: 0 10px 0 0;
`;

const ProjectWrapper = styled.div`
  background-color: #fff;
  width: 200px;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: grid;
  justify-content: start;
  align-content: center;
  grid-auto-flow: column;
  padding: 2.5em;
  background-color: rgb(0 0 0 / 0.8);
  gap: 2em;
`;

const Button = styled.button`
  text-align: center;
`;

const Name = styled.h2`
  width: 100%;
`;

const Type = styled.p``;
