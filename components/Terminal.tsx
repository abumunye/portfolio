import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const StyledTerminal = styled.div`
  margin-top: 20vh;
  margin: 0 auto;
`;

const StyledTerminalHeader = styled.div`
  height: 28px;
  background-color: #e4e3e5;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

interface IStyledHeaderButton {
  color: string;
}

const StyledHeaderButton = styled.div<IStyledHeaderButton>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 9px;
  background-color: ${(props) => props.color};
`;

const StyledTerminalWindow = styled.div`
  background-color: #5a5d7a;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.15),
    0 15px 35px rgba(50, 50, 93, 0.2), 0 5px 15px rgba(0, 0, 0, 0.12);
  font-family: Monaco, Consolas, Lucida Console, monospace;
  overflow: hidden;
`;

const StyledStatement = styled.div`
  &:first-child {
    padding-top: 35px;
  }
  margin-bottom: 25px;
  margin-left: 35px;
  margin-right: 35px;
  line-height: 24px;
`;

const StyledInputStatement = styled.p`
  color: #f7f7f7;
  font-size: 20px;
  &::before {
    content: ">";
  }

  & div {
    display: inline;
  }

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

const StyledReturnStatement = styled.p`
  color: #e7d184;
  font-size: 20px;
  & a {
    color: #35feff;
  }

  @media (max-width: 700px) {
    font-size: 15px;
  }
`;

export default function Terminal() {
  return (
    <>
      <StyledTerminal>
        <StyledTerminalHeader>
          <StyledHeaderButton color="#f96256" />
          <StyledHeaderButton color="#fdbc3d" />
          <StyledHeaderButton color="#33c948" />
        </StyledTerminalHeader>
        <StyledTerminalWindow>
          <StyledStatement>
            <StyledInputStatement>
              {" Abubakar.currentLocation"}
            </StyledInputStatement>
            <StyledReturnStatement>{`"London, England"`}</StyledReturnStatement>
          </StyledStatement>
          <StyledStatement>
            <StyledInputStatement> Abubakar.contactInfo</StyledInputStatement>
            <StyledReturnStatement>
              [&quot;
              <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
                abubakar.munye1@gmail.com
              </a>
              &quot;, &quot;
              <a
                href="https://www.youtube.com/channel/UCznXs7ocnJEqvKjrXMItxlg"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
              &quot;, &quot;
              <a
                href="https://github.com/abumunye"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              &quot;]
            </StyledReturnStatement>
          </StyledStatement>
          <StyledStatement>
            <StyledInputStatement> Abubakar.intrests</StyledInputStatement>
            <StyledReturnStatement>
              [&quot;PCB design&quot;, &quot;3D printing&quot;,
              &quot;prototyping&quot;, &quot;Embedded Systems&quot;]
            </StyledReturnStatement>
          </StyledStatement>
          <StyledStatement>
            <StyledInputStatement> Abubakar.education</StyledInputStatement>
            <StyledReturnStatement>
              &quot;B.Eng. Electronic Engineering - Middlesex University,
              London&quot;
            </StyledReturnStatement>
          </StyledStatement>
          <StyledStatement>
            <StyledInputStatement> Abubakar.skills </StyledInputStatement>
            <StyledReturnStatement>
              [&quot;C/C++&quot;, &quot;Python&quot;, &quot;STM32/PIC&quot;,
              &quot;Labview&quot;, &quot;Matlab&quot;, &quot;VHDL&quot;]
            </StyledReturnStatement>
          </StyledStatement>
          <StyledStatement>
            <StyledInputStatement>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.pauseFor(300).typeString("").start();
                }}
              />
            </StyledInputStatement>
          </StyledStatement>
        </StyledTerminalWindow>
      </StyledTerminal>
    </>
  );
}
