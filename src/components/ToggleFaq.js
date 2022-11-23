import React, { useState } from 'react';
import {motion} from 'framer-motion'

const ToggleFaq = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout onClick={() => setToggle(!toggle)} className='question'>
      <motion.h4 layout>{title}</motion.h4>
      {toggle && children}
      <div className='faq-line'></div>
    </motion.div>
  );
};

export default ToggleFaq;
