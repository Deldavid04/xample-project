import { Link } from 'react-router-dom';
import ToggleMode from './ToggleMode';
import { Button, ButtonGroup, Stack, HStack, Heading } from '@chakra-ui/react';

const NavItems: React.FC<{}> = () => {
  return (
    <Stack
      direction='row'
      justify='space-between'
      py='2'
      px='6'
      bg='gray.200'
      alignItems='center'
      height='7rem'
      w='100vw'
      borderBottom='2px solid pink'
    >
      <Heading>Logo</Heading>

      <HStack spacing='6'>
        <Button variant='link' colorScheme='blue'>
          <Link to='/'>
            <a>Home</a>
          </Link>
        </Button>

        <Button variant='link' colorScheme='blue'>
          <Link to='/about'>
            <a>About</a>
          </Link>
        </Button>

        <Button variant='link' colorScheme='blue'>
          <Link to='/contact'>
            <a>Contact Us</a>
          </Link>
        </Button>
      </HStack>

      <HStack>
        <Button colorScheme='blue' variant='solid' marginRight='12'>
          <Link to='/register'>
            <a href='/login'>Register Now</a>
          </Link>
        </Button>

        <ToggleMode />
      </HStack>
    </Stack>
  );
};

export default NavItems;
