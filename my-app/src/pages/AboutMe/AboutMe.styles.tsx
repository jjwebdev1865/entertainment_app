import styled from "styled-components";

export const AboutMeDescriptionBar = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  column-gap: 20px;
  margin: 0 10px;

  div {
    width: 100%;

    p {
      word-wrap: break-word;
      word-break: break-all;
    }
  }
  
  h2 {
    text-align: center;
    text-decoration: underline;
  }
`