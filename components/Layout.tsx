import NavBar from "../components/NavBarContainer";
import Footer from "../components/Footer";
import { routes } from "../components/Route";
import styled from "styled-components";
import React, { ReactChildren, ReactChild } from "react";

const StyledMain = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
`;

interface ILayout {}

export default function Layout(props: React.PropsWithChildren<ILayout>) {
  return (
    <StyledMain>
      <NavBar routes={routes} />
      {props.children}
      <Footer />
    </StyledMain>
  );
}
