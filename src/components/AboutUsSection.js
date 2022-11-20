import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';

const AboutUsSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills to help you achieve it.
          </p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt='hero-img' />
      </Image>
    </About>
  );
};

//Styled components
const About = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: center;
  justify-content: space-between;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    max-height: 80vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
export default AboutUsSection;
