import React from "react";
import styled from "styled-components";
import { ProjectsData } from "./utilities";
import { Icons } from "./utilities";

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

const Badge = styled(Icons.Check)`
  color: #00a700;
  padding: 0 10px 0 0;
`;

const ProjectWrapper = styled.div`
  background-color: #fff;
  width: 200px;
  padding: 20px;
  border-radius: 2px;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.98), 0 2px 10px 0 rgba(0, 0, 0, 0.98);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  grid-auto-flow: column;
  padding: 2.5em;
  background-color: rgb(0 0 0 / 0.8);
  gap: 2em;
`;

const Button = styled.button`
  text-align: center;
  margin: 0 0 1em 0;
`;

const Name = styled.h2`
  width: 100%;
  margin: 0 0 1em 0;
`;

const Type = styled.p`
  margin: 0 0 1em 0;
`;
