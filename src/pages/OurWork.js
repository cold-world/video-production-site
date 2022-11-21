import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import atheleteimg from '../img/athlete-small.png';
import racerimg from '../img/theracer-small.png';
import goodtimesimg from '../img/goodtimes-small.png';

const OurWork = () => {
  return (
    <StyledOurWork>
      <Movie>
        <h2>The Athlete</h2>
        <div className='line'></div>
        <Link to='/'>
          <img src={atheleteimg} alt='athlete' />
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          deleniti!
        </p>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className='line'></div>
        <Link to='/'>
          <img src={racerimg} alt='The Racer' />
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          deleniti!
        </p>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className='line'></div>
        <Link to='/'>
          <img src={goodtimesimg} alt='Good Times' />
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          deleniti!
        </p>
      </Movie>
    </StyledOurWork>
  );
};

const StyledOurWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 7rem 10rem;
  h2 {
    padding: 1rem;
  }
`;
const Movie = styled.div`
  text-align: center;
  :not(:last-child) {
    padding-bottom: 8rem;   
  }
  .line {
    height: 0.3rem;
    width: 100%;
    background: black;
    margin-bottom: 3rem;
  }
  img {
    overflow: hidden;
    width: 80%;
    object-fit: cover;
    height: 60vh;
    margin: 0 auto;
  }
  p {
    font-size: 1rem;
  }
`;

export default OurWork;
