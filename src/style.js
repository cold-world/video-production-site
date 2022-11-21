import styled from 'styled-components';

export const About = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 10rem 0;

`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
`;
export const Image = styled.div`
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
