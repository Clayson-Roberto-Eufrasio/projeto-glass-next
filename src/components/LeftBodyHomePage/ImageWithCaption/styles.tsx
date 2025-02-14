import styled from "styled-components";

export const ImageWithCaptionStyled = styled.figure`
  border: 8px solid var(--white);
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
  position: relative;
  width: 70%;
  margin: auto;

  figcaption {
    position: absolute;
    color: var(--white);
    top: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    opacity: 0;
  }

  figcaption:hover {
    transition: 1s;
    opacity: 1;
  }
`