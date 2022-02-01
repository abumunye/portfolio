import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledTitle = styled.h2`
  color: #525f7f;
  font-family: Camphor, Open Sans, Segoe UI, sans-serif;
  font-weight: 500;
  font-size: 1.5em;
  text-align: center;
  padding-top: 50px;
  margin-top: 50px;
  margin-bottom: 80px;
  line-height: 1.2;

  &::after {
    content: " ";
    border: 4px solid #747fe0;
    display: block;
    margin: 0 auto;
    margin-top: 0px;
    margin-top: 30px;
    width: 50px;
  }
`;

const StyledProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1010px) {
    font-size: 15px;
    justify-content: center;
  }
`;
function createProjects(amount: number): number[] {
  let arr: number[] = [];
  for (let i = 0; i < amount; i++) {
    arr.push(i);
  }
  return arr;
}

export default function About() {
  return (
    <>
      <StyledTitle id="projects">Projects</StyledTitle>
      <StyledProjectsContainer>
        {createProjects(10).map((ele) => {
          return (
            <ProjectCard
              key={ele}
              image={"../public/Images/Tetris_IMG.jpg"}
              title={"Tetris on 16x8 Matrix"}
              desc={
                "Tetris game programmed on a PIC18F4550. It has a beautiful 16x8 matrix display, an LCD screen to indicate the current score. I used 3 74HC595 Shift Registers to control both matrixes. A joystick was used to control the current piece moving."
              }
              skills={[
                "Multiplexing",
                "Logic",
                "Control",
                "PIC",
                "Programming",
                "MPLAP X",
                "Timers",
              ]}
            ></ProjectCard>
          );
        })}
      </StyledProjectsContainer>
    </>
  );
}
