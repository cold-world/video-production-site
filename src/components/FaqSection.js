import React from 'react';
import styled from 'styled-components';
import { About } from '../style';
import ToggleFaq from './ToggleFaq';
import { AnimateSharedLayout } from 'framer-motion';
import { useScrollFadeEffect } from '../components/useScrollFadeEffect';
import { fadeWithScroll } from '../animation';

const FaqSection = () => {
  const [element, controls] = useScrollFadeEffect();

  return (
    <Faq
      variants={fadeWithScroll}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <ToggleFaq title={'How Do I Start?'}>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              ipsa?
            </p>
          </div>
        </ToggleFaq>
        <ToggleFaq title={'What Products do you offer?'}>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              ipsa?
            </p>
          </div>
        </ToggleFaq>
        <ToggleFaq title={'Diferrent Payment Methods'}>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              ipsa?
            </p>
          </div>
        </ToggleFaq>
        <ToggleFaq title={'Daily Schedule'}>
          <div className='answer'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              ipsa?
            </p>
          </div>
        </ToggleFaq>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
    padding-bottom: 4rem;
  }
  h4 {
    font-size: 2.6rem;
    padding-bottom: 3rem;
  }
  p {
    padding: 1rem 0;
  }
  .question {
    padding: 3rem 0;
    cursor: pointer;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  answer {
    padding: 2rem 0;
  }
`;

export default FaqSection;
