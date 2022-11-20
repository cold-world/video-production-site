import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: white;
  padding: 5rem 10rem;
  background-color: #1B1B1B;
  font-family: sans-serif;
}

button {
  padding: 1rem 2rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  background: transparent;
  border: 3px solid #23D997;
  transition: all 0.3s ease-in-out;
  color: white;
  &:hover {
    background-color: #23D997;
    color: white;
  }
}
  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }
  h3 {
    color: white;
  }
  h4 {
    font-weight: bold;
  }
  a {
    font-size: 1.1rem;
  }
  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }
  span {
    color: #23D997;
    font-weight:bold;
  }
`;

export default GlobalStyle;
