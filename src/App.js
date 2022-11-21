import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<AboutUs />} />
        <Route path='work' element={<OurWork />} />
        <Route path='contact' element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
