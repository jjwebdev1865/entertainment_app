import styled from 'styled-components';

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

export const StyledRatingDropdown = styled.div`
  display: flex;
`;
