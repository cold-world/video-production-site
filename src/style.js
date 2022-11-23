import styled from 'styled-components';
import { motion } from 'framer-motion';

export const About = styled(motion.div)`
  display: flex;
  min-height: 90vh;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem 0;
  @media (max-width: 1300px) {
    display: block;
    text-align: center;
    align-items: center;
    padding:5rem 2rem;
    button {
      margin: 2rem 0 5rem 0;
    }
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  @media (max-width: 1300px) {
    padding: 0;
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    max-height: 80vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
