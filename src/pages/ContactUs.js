import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { titleAnimatedToUp } from '../animation';

const ContactUs = () => {
  return (
    <ContactStyle>
      <Title>
        <Hide>
          <motion.h2
            variants={titleAnimatedToUp}
            initial='hidden'
            animate='show'
          >
            Get in touch
          </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimatedToUp} initial='hidden' animate='show'>
            <Circle />
            <h2>Send Us a Message</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimatedToUp} initial='hidden' animate='show'>
            <Circle />
            <h2>Phone Call</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimatedToUp} initial='hidden' animate='show'>
            <Circle />
            <h2>Social media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 10rem 10rem;
  min-height: 80vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
    margin-top: 5rem;
  }
`;
const Title = styled.div`
  align-self: center;
  margin-bottom: 4rem;
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: white;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
