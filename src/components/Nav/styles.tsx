import styled from "styled-components";

export const NavStyled = styled.nav`
  display: block;

  h1 {
    display: none;
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