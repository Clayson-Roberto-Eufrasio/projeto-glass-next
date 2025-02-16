import styled from "styled-components";

export const MenuNavStyled = styled.nav`
  display: block;

  h1 {
    display: none;
  }

  ul {
    text-transform: uppercase;
  }

  li {
    display: inline-block;
    padding: 10px;
    background-color: var(--lightGray);
    margin: 2px;
  }

  li:hover {
    background-color: var(--darkGray);
    transition: 1s;
  }

  a {
    text-decoration: none;
    color: var(--dark);
  }

  a:hover {
    color: var(--white);
  }
`