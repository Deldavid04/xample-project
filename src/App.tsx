import { Routes, Route } from 'react-router-dom';
import NavItems from './components/NavItems';
import { Heading, Stack, HStack, VStack, useColorMode } from '@chakra-ui/react';
import Home from './pages/Home';
import About from './pages/About';
import SignUpContainer from './components/form/SignUpContainer';
import SignInContainer from './components/form/SignInContainer';

function App() {
  return (
    <div>
      <NavItems />
      <Routes>
        <Route path='/' element={<SignInContainer />} />
        <Route path='/home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='register' element={<SignUpContainer />} />
      </Routes>
    </div>
  );
}

export default App;
