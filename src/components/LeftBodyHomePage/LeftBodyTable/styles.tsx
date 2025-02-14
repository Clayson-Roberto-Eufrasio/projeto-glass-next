import styled from "styled-components";

export const LeftBodyTableStyled = styled.table`
  width: 70%;
  margin: auto;
  border: 1px solid var(--darkGray);
  border-spacing: 0px;

  caption {
    font-weight: bolder;
    color: var(--mediumGray);

    span {
      display: block;
      font-size: 8px;
      float: right;
      padding-top: 10px;
      color: var(--dark);
    }
  }

  td {
    border: 1px solid var(--mediumGray);
    padding: 10px;
    vertical-align: top;
  }

  .esquerda {
    background-color: var(--darkGray);
    text-align: right;
    color: var(--white);
    font-weight: bold;
  }

  .direita {
    background-color: var(--lightGray);
    text-align: left;
  }

`