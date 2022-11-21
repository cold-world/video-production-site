import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
      <h1><Link to="/">Video Production</Link></h1>
      <ul>
        <li>
          <Link to='/'>About Us</Link>
        </li>
        <li>
          <Link to='work'>Our Work</Link>
        </li>
        <li>
          <Link to='contact'>Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  background-color: #282828;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  margin: auto;
  padding: 1rem 10rem;
  a{
    text-decoration: none;
    color: white;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin-left: 10rem;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      color: gray;
    }
  }
`;

export default Nav;
