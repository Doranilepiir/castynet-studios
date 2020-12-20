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
            <Image src={projects.image} alt={projects.name} />
            <Type>
              <Badge size="20" />
              {projects.type}
            </Type>
            <Button as="a" href={projects.link}>
              View Project <Icons.Link size="30" />
            </Button>
          </ProjectWrapper>
        ))}
      </Wrapper>
    </>
  );
}

const Image = styled.img`
  width: 100%;
`;

const Badge = styled(Icons.Check)`
  color: #00a700;
  padding: 0 10px 0 0;
`;

const ProjectWrapper = styled.div`
  background-color: #fff;
  width: 200px;
  padding: 10px;
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
  text-transform: uppercase;
  font-size: 0.9em;
  color: #dd3500;

  &:before {
    content: "";
    width: 100px;
    background-color: #0176d3;
    height: 8px;
    position: absolute;
    margin-top: 10px;
    opacity: 0;
  }

  &:hover:before {
    opacity: 0.3;
  }
`;

const Type = styled.p`
  margin: 0.5em 0 1em 0;
`;
