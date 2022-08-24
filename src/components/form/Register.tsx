import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  FormErrorMessage,
  Button,
  RadioGroup,
  HStack,
  Radio,
} from '@chakra-ui/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { SubmitHandler, useForm, useFormState } from 'react-hook-form';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup
  .object({
    firstName: yup.string().required('REQUIRED'),
    lastName: yup.string().required('REQUIRED'),
    email: yup.string().email('Invalid email address').required('Required'),
    password: yup
      .string()
      .min(6, 'Must be 6 characters or more')
      .required('REQUIRED'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), ''], 'Passwords must match')
      .required('REQUIRED'),
  })
  .required();

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log('data', data);
    reset();
  };
  return (
    <VStack spacing={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl w='350px' isInvalid>
          <FormLabel htmlFor='firstName'>First Name</FormLabel>
          <Input placeholder='First Name' {...register('firstName')} />

          <FormErrorMessage>
            {errors.firstName && errors.firstName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mt={3} isInvalid>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder='Last Name' {...register('lastName')} />
          <FormErrorMessage>
            {errors.lastName && errors.lastName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mt={3} isInvalid>
          <FormLabel>Email Address</FormLabel>
          <Input placeholder='Email Address' {...register('email')} />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mt={3} isInvalid>
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            placeholder='Password'
            {...register('password')}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mt={3} isInvalid>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type='password'
            placeholder='Confirm Password'
            {...register('confirmPassword')}
          />
          <FormErrorMessage>
            {errors.confirmPassword && errors.confirmPassword.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          type='submit'
          mt={4}
          colorScheme='facebook'
          size='md'
          width='150px'
          height='45px'
        >
          Submit
        </Button>
      </form>
    </VStack>
  );
};

export default Register;
