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
    overflow: 'hidden'
  },
};


export const StyledHeader = styled.div`
  display: block;
  width: 100%;
  border-bottom: 3px solid black;
  margin-bottom: 10px;
  h1 {
    text-align:center;
    margin-top: 0;
  }
`;

export const StyledContentDescriptors = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const StyledActorsList = styled.div`
  border-bottom: 1px solid black;
  h2 {
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0
  }
`;

export const StyledSummary = styled.div`
  h2 {
    text-align: center;
  }
`;

export const StyledSeasonsPagination = styled.div`
  border-bottom: 1px solid black;
  h3 {
    display: flex;
    justify-content: center;
    margin: 5px 0px 0px;
    ul {
      display: flex;
      list-style: none;
      justify-content: center;
      margin-top: 0px;
      padding-left: 5px;
    }
  }

`;

export const StyledSeasonReviewContent = styled.div`
  display: flex;
  width: 100%;

  #column-one {
    width: 33%;

    ul {
      list-style: none;
      padding-left: 5px;
    }
  }

  #column-two {
    border-left: 1px solid black;
    width: 66%;

    p {
      margin-top: 0px;
      padding-left: 10px;
    }
  }
`;

export const StyledContentHeader = styled.h4`
  text-align: center;
  margin: 0px 0px 5px;
`;