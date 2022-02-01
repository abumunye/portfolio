import React from "react";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { Link, animateScroll as scroll } from "react-scroll";

const HeroContainer = styled.div`
  margin: 0 auto;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeroTitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  font-weight: normal;
  color: ${(props) => props.theme.colors.purple};
  font-size: 4.5em;
  @media (max-width: 700px) {
    font-size: 57px;
    min-height: 152px;
  }
`;

const HeroTitle = styled.span`
  font-weight: normal;
  color: ${(props) => props.theme.colors.purple};

  &:before {
    content: ">";
  }
`;

const HeroDescription = styled.p`
  font-weight: 200;
  font-size: 1.3em;
  line-height: 40px;
  color: ${(props) => props.theme.colors.lightGrey};
  margin: 80px 0;

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.purple};
    transition: 0.1s ease-in-out;
    font-weight: bold;
  }

  & a:hover {
    color: #959de4;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    font-size: 17px;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroTitleContainer>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(300).typeString("Abubakar Munye").start();
          }}
        />
      </HeroTitleContainer>
      <HeroDescription>
        I am a Junior Developer. My passion is building and developing Websites
        and I also dabble in hardware. Check out my{" "}
        <Link to="projects" smooth="true">
          {"side-projects "}
        </Link>
        below.
      </HeroDescription>
    </HeroContainer>
  );
}
