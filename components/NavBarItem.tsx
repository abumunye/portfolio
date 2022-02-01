import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { IRoute } from "./Route";

const StyledNavItem = styled.p`
  margin-left: 40px;

  text-decoration: none;
  color: #5a5d7a;

  &:hover {
    color: ${(props) => props.theme.colors.purple};
    cursor: pointer;
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 8px;
    background: ${(props) => props.theme.colors.purple};
    transition: width 0.3s;
    margin-top: 10px;
  }

  &:hover::after {
    width: 100%;
    transition: width 0.3s;
  }
`;

interface INavBarItem {
  route: IRoute;
}

export default function NavBarItem({ route }: INavBarItem) {
  return (
    <>
      <Link href={route.path} passHref>
        <StyledNavItem>{route.name}</StyledNavItem>
      </Link>
    </>
  );
}
