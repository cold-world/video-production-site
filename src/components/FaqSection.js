import React from 'react';
import styled from 'styled-components';
import { About } from '../style';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>How Do I Start?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>What Products do you offer?</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Diferrent Payment Methods</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Daily Schedule</h4>
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsa?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
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
    padding-bottom:3rem;
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
