import { Box, useColorMode } from '@chakra-ui/react';
import LogIn from './LogIn';

const SignInContainer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === 'dark' ? 'pink.700' : 'pink.200'}
      rounded='lg'
      mt='8rem'
      mx='auto'
      w='750px'
      p={9}
    >
      <LogIn />
    </Box>
  );
};

export default SignInContainer;
