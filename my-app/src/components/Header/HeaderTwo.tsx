import React from "react";
import { StyledFilterBar, StyledHeaderContainer } from "./Header.styles";

interface HeaderTwoProps {
  children: React.ReactNode;
  title: string
}

export const HeaderTwo = ({ children, title }: HeaderTwoProps) => (
  <StyledHeaderContainer id={`header-${title}`} >
    <h1>{title}</h1>
    
    <StyledFilterBar>{children}</StyledFilterBar>
  </StyledHeaderContainer>
);