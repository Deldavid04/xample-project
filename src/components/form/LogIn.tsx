import { Link } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  FormHelperText,
  VStack,
  Text,
  useColorMode,
} from '@chakra-ui/react';

type FormInputs = {
  email: string;
  password: string;
};

const schema: yup.SchemaOf<Partial<FormInputs>> = yup
  .object({
    email: yup.string().email('Invalid email address').required(),
    password: yup.string().min(6, 'Must be 6 characters or more').required(),
  })
  .required();

const LogIn = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { handleSubmit, control, formState } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log(data);
  };
  return (
    <VStack>
      <Text fontSize='4xl' as='em' mb={4} color='red'>
        Sign In To Your Account
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Controller
            name='email'
            control={control}
            render={({ field }) => <Input {...field} placeholder='Email' />}
          />
          <Text mt={2} color='red'>
            {formState.errors.email && (
              <p className='error'>{formState.errors.email.message}</p>
            )}
          </Text>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder='Password' type='password' />
            )}
          />
          <Text mt={2} color='red'>
            {formState.errors.password && (
              <p className='error'>{formState.errors.password.message}</p>
            )}
          </Text>
        </FormControl>

        <Button type='submit' mt={4}>
          Submit
        </Button>

        <FormControl>
          <FormHelperText mt={5} textAlign='center' fontSize='15px'>
            If you don't have an account{' '}
            <Link
              to='/register'
              color={colorMode === 'light' ? 'blue' : 'blue.200'}
            >
              Register here
            </Link>
          </FormHelperText>
        </FormControl>
      </form>
    </VStack>
  );
};

export default LogIn;
