import styled from "styled-components";

export const StyledPoster = styled.img`
  width: 100%;
  height: 100%;
`;

export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "lightgray",
    width: '50%',
    height: '60%',
    padding: 0,
    overflow: 'hidden'
  },
};