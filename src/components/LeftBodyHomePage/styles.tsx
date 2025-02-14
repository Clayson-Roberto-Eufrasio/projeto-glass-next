import styled from "styled-components";

export const LeftBodyHomePageStyled = styled.section`
  display: block;
  float: left;
  width: 60%;
  border-right: 1px solid var(--darkGray);

  article {
    padding: 15px;
    
    h2 {
      background-color: var(--mediumGray);
      color: var(--white);
      font-size: 13pt;
      padding: 10px 8px ;
      font-weight: bolder;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
    }
  }

  p {
    text-align: justify;
    text-indent: 20px;
    padding: 10px 0px;
  }

  #video1 {
    margin: auto;
    width: 70%;
  }
`