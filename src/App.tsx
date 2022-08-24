import { Routes, Route } from 'react-router-dom';
import NavItems from './components/NavItems';
import { Heading, Stack, HStack, VStack, useColorMode } from '@chakra-ui/react';
import Home from './components/Home';
import About from './components/About';
import SignUpContainer from './components/form/SignUpContainer';

function App() {
  const { colorMode } = useColorMode();
  return (
    <div>
      <NavItems />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='register' element={<SignUpContainer />} />
      </Routes>
    </div>
  );
}

export default App;
