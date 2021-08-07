import React from "react";
import { ProjectsData } from "./utilities";
import * as Styled from "./styles/projects.styles.jsx";
import { Icons } from "./utilities";
import Carousel from "react-elastic-carousel";

export default function Projects() {
  const projects = ProjectsData.items;
  const breakP = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  return (
    <React.Fragment>
      <Styled.Wrapper>
        <Carousel itemsToShow={4} breakPoints={breakP}>
          {projects.map((projects) => (
            <Styled.ProjectWrapper key={projects.id}>
              <Styled.Image src={projects.image} alt={projects.name} />
              <Styled.Type>
                <Styled.Badge size="20" />
                {projects.type}
              </Styled.Type>
              <Styled.Button as="a" href={projects.link}>
                View {projects.pp}
                <span className="no-underline"></span>
                <Icons.Link size="15" />
              </Styled.Button>
            </Styled.ProjectWrapper>
          ))}
        </Carousel>
      </Styled.Wrapper>
    </React.Fragment>
  );
}
