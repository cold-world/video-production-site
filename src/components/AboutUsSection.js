import React from 'react';
import home1 from '../img/home1.png';
import { About, Description, Hide, Image } from '../style';
import { motion } from 'framer-motion';
import { titleAnimated, fade } from '../animation';
import Wave from './Wave';
const AboutUsSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimated}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimated}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimated}>true.</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills to help you achieve it.
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>
      </Description>
      <Image>
        <img src={home1} alt='hero-img' />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutUsSection;
