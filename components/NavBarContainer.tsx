import React from "react";
import styled from "styled-components";
import NavBarItem from "./NavBarItem";
import { IRoute } from "./Route";

const StyledNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 1.2em;
  margin-top: 40px;
`;

interface INavBar {
  routes: IRoute[];
}

export default function NavBar({ routes }: INavBar) {
  return (
    <StyledNavBar>
      {routes.map((element) => {
        return <NavBarItem key={element.path} route={element}></NavBarItem>;
      })}
    </StyledNavBar>
  );
}
