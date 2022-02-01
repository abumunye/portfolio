import React from "react";
import styled from "styled-components";
import { BsYoutube, BsGithub } from "react-icons/bs";
import Link from "next/link";

const StyledContact = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  & svg {
    margin: 15px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default function Footer() {
  return (
    <StyledContact>
      <StyledIconsContainer>
        <Link href={"https://github.com/abumunye"} passHref>
          <BsGithub size={40} color="#525f7f" />
        </Link>
        <Link
          href={"https://www.youtube.com/channel/UCznXs7ocnJEqvKjrXMItxlg"}
          passHref
        >
          <BsYoutube size={40} color="#525f7f" />
        </Link>
      </StyledIconsContainer>
    </StyledContact>
  );
}
