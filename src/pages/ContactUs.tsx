import * as React from 'react';
import { SubmitHandler, useForm, useFormState } from 'react-hook-form';

import {
  Image,
  Stack,
  HStack,
  VStack,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react';
import Burger from '../assets/theo-crazzolara-mU-HLf41qhA-unsplash.jpg';

const Contact: React.FunctionComponent = () => {
  return (
    <Stack direction='row' spacing={8}>
      <VStack>
        <Image src={Burger} alt='Hot Drink' w={900} h={700} />
      </VStack>

      <VStack>
        <Text fontSize='5xl' mt={12}>
          Contact Us
        </Text>

        <form>
          <FormControl m='auto'>
            <FormLabel htmlFor='firstName'>Full Name</FormLabel>
            <Input
              placeholder='Enter full name...'
              width='500px'
              variant='flushed'
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor='firstName'>Email</FormLabel>
            <Input
              placeholder='Enter email...'
              width='500px'
              variant='flushed'
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel htmlFor='message'>Message</FormLabel>
            <Input
              placeholder='Enter message...'
              width='500px'
              variant='flushed'
              mt={8}
            />
          </FormControl>

          <Button mt={6}>Send Message</Button>
        </form>
      </VStack>
    </Stack>
  );
};

export default Contact;
