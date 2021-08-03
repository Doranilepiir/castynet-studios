import React from "react";
import { ProjectsData } from "./utilities";
import * as Styled from "./styles/projects.styles.jsx";
import { Icons } from "./utilities";

export default function Projects() {
  const projects = ProjectsData.items;

  return (
    <React.Fragment>
      <Styled.Wrapper>
        {projects.map((projects) => (
          <Styled.ProjectWrapper key={projects.id}>
            <Styled.Image src={projects.image} alt={projects.name} />
            <Styled.Type>
              <Styled.Badge size="20" />
              {projects.type}
            </Styled.Type>
            <Styled.Button as="a" href={projects.link}>
              View Project<span className="no-underline"></span>
              <Icons.Link size="15" />
            </Styled.Button>
          </Styled.ProjectWrapper>
        ))}
      </Styled.Wrapper>
    </React.Fragment>
  );
}
