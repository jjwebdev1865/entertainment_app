import styled from "styled-components";

export const StyledMovieList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  height: 50%;
  column-gap: 2%;

  li {
    width: 23%;
  }
`;

export const StyledMovieItem = styled.li`
  border: 2px solid black;
`;

export const StyledPoster = styled.img`
  width: 100%;
`;