import styled from "styled-components";


export const StyledItemListSection = styled.section`
  min-height: 85vh;
  padding: 10px;
`;

export const StyledItemList = styled.ul`
  max-height: 80vh;
  list-style: none;
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  grid-gap: 2%;
  row-gap: 2%;
  overflow: auto;
  
  li {
    height: 100%;
    max-height: 440px;
    min-height: 425px;
    max-width: 290px;
  }
`;