import React from 'react';

import { Container, Typography, TextField, Button, Stack } from '@mui/material';

import { useForm } from 'react-hook-form';

type FormValues = {
  email: String
  password: string
}

const LoginForm = () => {

  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { register, handleSubmit } = form ;
  const onSubmit = (data: FormValues) => {
    console.log(data)
  };

  //TO DO: IMPLEMENTAR ERRORES EN EL FORMULARIO DE LOGIN
  return (
    <Container sx={{bgcolor: 'lightblue', paddingTop: '2rem', paddingBottom: '2rem'}}>
    <Typography variant='h5'>Formulario de registro</Typography>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <Stack spacing={2} width={400}>
          <TextField variant='filled' label='Email' type='email' {...register('email', {required: true})} />
          <TextField variant='filled' label='Contraseña' type='password' {...register('password', {required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/})} />
          <Button type='submit' variant='contained' color='primary'>
            Login
          </Button>
        </Stack>
      </form>
    </Container>
    
  )
};

export default LoginForm ;
