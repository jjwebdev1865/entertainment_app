import React from "react";
import { StyledHeaderContainer } from "./Header.styles";

interface HeaderTwoProps {
  children: React.ReactNode;
  title: string
}

export const HeaderTwo = ({ children }: HeaderTwoProps) => (
  <StyledHeaderContainer id={`test`} >
    <h1>Actors</h1>
    <div id='movie-header-filter-bar' style={{ display: 'flex'}}>
      {children}
    </div>
  </StyledHeaderContainer>
);