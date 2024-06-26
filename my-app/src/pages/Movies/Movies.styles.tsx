import styled from 'styled-components';

export const StyledMovieSection = styled.section`
  min-height: 85vh;
`

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