import styled from "styled-components";

export const RigthBodyHomePageStyled = styled.aside`
  display: block;
  width: 39%;
  float: right;
  background-color: var(--backgroundColor);
  padding: 10px;
  margin-right: 4px;
  margin-top: 20px;

  h1 {
    font-family: 'Bubblegum Sans', cursive;
    font-size: 30pt;
    color: var(--mediumGray);
  }

  h2 {
    background-color: var(--mediumGray);
    padding: 10px;
    color: var(--white);
    font-size: 13pt;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  }

  p {
    text-align: justify;
    text-indent: 20px;
    padding: 10px 0px;
  }

  #video2 {
    margin: auto;
    width: 100%;
  }
`