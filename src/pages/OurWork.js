import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import atheleteimg from '../img/athlete-small.png';
import racerimg from '../img/theracer-small.png';
import goodtimesimg from '../img/goodtimes-small.png';
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';
import { useScrollFadeEffect } from '../components/useScrollFadeEffect';
import { fadeWithScroll } from '../animation';

const OurWork = () => {
  const [element, controls] = useScrollFadeEffect();
  const [element2, controls2] = useScrollFadeEffect();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledOurWork
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Movie>
        <h2>The Athlete</h2>
        <div className='line'></div>
        <Link to='/work/the-athlete'>
          <img src={atheleteimg} alt='athlete' />
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          deleniti!
        </p>
      </Movie>
      <Movie
        variants={fadeWithScroll}
        animate={controls}
        initial='hidden'
        ref={element}
      >
        <h2>The Racer</h2>
        <div className='line'></div>
        <Link to='/work/the-racer'>
          <img src={racerimg} alt='The Racer' />
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
          deleniti!
        </p>
      </Movie>
      <Movie
        variants={fadeWithScroll}
        animate={controls2}
        initial='hidden'
        ref={element2}
      >
        <h2>Good Times</h2>
        <div className='line'></div>
        <Link to='/work/good-times'>
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

const StyledOurWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem;
  }
`;
const Movie = styled(motion.div)`
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
