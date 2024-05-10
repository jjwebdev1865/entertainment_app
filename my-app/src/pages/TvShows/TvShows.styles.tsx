import styled from "styled-components";

export const StyledGenreFilterBar = styled.ul`
  display: flex;
  list-style: none;
`;

export const StyledShowList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  height: 50%;
  column-gap: 2%;

  li {
    width: 23%;
    margin: 1% 0;
  }
`;