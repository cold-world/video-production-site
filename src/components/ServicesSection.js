import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import homeImg2 from '../img/home2.png';
import { About, Description, Image } from '../style';
import styled from 'styled-components';
import { useScrollFadeEffect } from '../components/useScrollFadeEffect';
import { fadeWithScroll } from '../animation';

const ServicesSection = () => {
  const [element, controls] = useScrollFadeEffect();
  return (
    <Services
      variants={fadeWithScroll}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services.
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={clock} alt='clock' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={teamwork} alt='teamwork' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={diaphragm} alt='diaphragm' />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={money} alt='money' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={homeImg2} alt='camera' />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 65%;
    padding: 2rem 0 4rem 0;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    background-color: white;
    color: black;
    padding: 1rem;
    margin-left: 1rem;
  }
`;

export default ServicesSection;
