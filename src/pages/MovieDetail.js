import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MovieState } from '../MovieState';
import { useLocation } from 'react-router-dom';

const MovieDetail = () => {
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    const currentMovie = movies.find((movie) => movie.url === currentUrl);
    setMovie(currentMovie);
  }, [movies, currentUrl]);

  return (
    <>
      {movie && (
        <Details>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <FilmInfo>
            {movie.awards.map((item) => (
              <Info title={item.title} description={item.description}></Info>
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

const Details = styled.div``;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 15vh;
  display: flex;
  flex-direction: column;
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
