import styled from 'styled-components';

export const StyledMovieHeader = styled.section`
  display: flex;
  align-items: center;

  justify-content: space-between;
  h1 {
    font-size: 2rem;
    margin: 10px 0px;
  }
`;

export const StyledMovieList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  height: 50%;
  column-gap: 2%;

  padding: 0px 10px 0px 20px;

  li {
    width: 23%;
    margin: 1% 0;
  }
`;