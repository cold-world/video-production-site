import React from 'react';
import AboutUsSection from '../components/AboutUsSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';
const AboutUs = () => {
 
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <AboutUsSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
