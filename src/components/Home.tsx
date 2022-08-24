import { Stack, HStack, VStack, Text } from '@chakra-ui/react';
import SignInContainer from './form/SignInContainer';

const Home = () => {
  return (
    <VStack height='80vh'>
      <SignInContainer />
    </VStack>
  );
};

export default Home;
