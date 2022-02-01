import React from "react";
import styled from "styled-components";
import Image from "next/image";
import pic from "../public/Images/Tetris_IMG.jpg";

export interface IProjectCard {
  image: string;
  title: string;
  desc: string;
  skills: string[];
}

const StyledProjectCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.05),
    0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 475px;
  position: relative;
  margin-bottom: 60px;
`;

const StyledImage = styled.img`
  width: 100% !important;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  object-fit: contain;
  max-height: 400px;
  height: 400px;
`;

const StyledTitle = styled.h3`
  font-weight: 500;
  font-size: 1.8em;
  line-height: 38px;
  color: #525f7f;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
`;

const StyledDescription = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 20px;
  line-height: 27px;
  color: #525f7f;
  text-align: justify;
`;

const StyledSkillsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  padding-left: 30px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const StyledSkill = styled.li`
  border-radius: 4px;
  border: 2px solid #92eac0;
  padding: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 0.85em;
  color: #525f7f;
  list-style-type: none;
`;

const StyledViewButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  & button {
    margin-bottom: 20px;
    display: inline-block;
    line-height: 40px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    font-size: 0.9em;
    font-weight: 600;
    background: #747fe0;
    color: #fff;
    width: 85%;
    border: 0;
  }

  & button:hover {
    cursor: pointer;
  }
`;

export default function ProjectCard({
  image,
  title,
  desc,
  skills,
}: IProjectCard) {
  return (
    <StyledProjectCard>
      <Image src={pic} alt="Picture of the author" layout="responsive" />
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{desc}</StyledDescription>
      <StyledSkillsContainer>
        {skills.map((skill, index) => {
          return <StyledSkill key={index}>{skill}</StyledSkill>;
        })}
      </StyledSkillsContainer>
      <StyledViewButtonContainer>
        <button>View</button>
      </StyledViewButtonContainer>
    </StyledProjectCard>
  );
}
