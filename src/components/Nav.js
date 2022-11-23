import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to='/'>Video Production</Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>About Us</Link>
          <Line
            initial={{ width: '0' }}
            animate={{ width: pathname === '/' ? '100%' : '0' }}
            transition={{ duration: 0.7 }}
          />
        </li>
        <li>
          <Link to='work'>Our Work</Link>
          <Line
            initial={{ width: '0' }}
            animate={{ width: pathname === '/work' ? '100%' : '0' }}
            transition={{ duration: 0.7 }}
          />
        </li>
        <li>
          <Link to='contact'>Contact Us</Link>
          <Line
            initial={{ width: '0' }}
            animate={{ width: pathname === '/contact' ? '100%' : '0' }}
            transition={{ duration: 0.7 }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  z-index: 10;
  position: sticky;
  top: 0;
  background-color: #282828;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  margin: auto;
  padding: 1rem 10rem;
  a {
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
    position: relative;

    &:hover {
      color: gray;
    }
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 0;
    ul {
      padding: 4rem 0 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      margin-left: 0;
    }
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0;
  position: absolute;
  left: 0;
`;

export default Nav;
