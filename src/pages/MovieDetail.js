import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MovieState } from '../MovieState';
import { useLocation } from 'react-router-dom';
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';

const MovieDetail = () => {
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    const currentMovie = movies.find((movie) => movie.url === currentUrl);
    setMovie(currentMovie);
    window.scrollTo(0, 0);
  }, [movies, currentUrl]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial='hidden'
          animate='show'
          exit='exit'
        >
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <FilmInfo>
            {movie.awards.map((item) => (
              <Info
                key={movie.title}
                title={item.title}
                description={item.description}
              ></Info>
            ))}
          </FilmInfo>
          <SecondImage>
            <img src={movie.secondaryImg} alt={movie.title} />
          </SecondImage>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)``;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 1300px) {
    padding-top: 5rem;
  }
  h2 {
    padding-left: 4rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const FilmInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 9rem;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem;
  }
`;
const StyledInfo = styled.div`
  padding: 1rem 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin-top: 0.5rem;
  }
`;

const SecondImage = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Info = ({ title, description }) => {
  return (
    <StyledInfo>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </StyledInfo>
  );
};

export default MovieDetail;
