import styled from "styled-components";

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
    overflow: 'hidden',
  },
};

export const StyledHeader = styled.div`
  display: block;
  width: 100%;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
  h1 {
    text-align: center;
  }
`;

export const StyledContentDescriptors = styled.div`
  display: flex;
  justify-content: space-between;
`;