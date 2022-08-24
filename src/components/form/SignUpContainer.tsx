import { Box, useColorMode } from '@chakra-ui/react';
import Register from './Register';

const SignUpContainer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === 'dark' ? 'pink.700' : 'pink.200'}
      rounded='lg'
      mt='2rem'
      mx='auto'
      w='750px'
      p={9}
    >
      <Register />
    </Box>
  );
};

export default SignUpContainer;
