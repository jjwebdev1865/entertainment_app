import styled from 'styled-components';

export const StyledMovieItem = styled.li`
  border: 2px solid black;
`;

export const StyledPoster = styled.img`
  width: 100%;
  height: 100%;
  /* max-height: 450px; */
`;

export const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'lightgray',
    width: '50%',
    height: '60%',
    padding: 0,
    overflow: 'hidden',
  },
};
