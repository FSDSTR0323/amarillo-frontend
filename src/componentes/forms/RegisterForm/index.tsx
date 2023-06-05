import React from 'react';
import HomepageNavMenu from '../../MenuBars/HomepageNavMenu';
import { Container, Typography, TextField, Button, Stack } from '@mui/material';

import { useForm } from 'react-hook-form';

type FormValues = {
  email: String
  password: string
}

const RegisterForm = () => {

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
  <>
    <HomepageNavMenu></HomepageNavMenu>
    <Container sx={{paddingTop: '2rem', paddingBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
    <Typography variant='h4' sx={{paddingBottom: '2rem'}}>Formulario de registro</Typography>
    <Typography variant='body1' sx={{paddingBottom: '2rem'}}>Introduce tus datos para poder crear tu perfil de usuario en la aplicación.</Typography>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <Stack spacing={2} width={400}>
          <TextField variant='filled' label='Name' type='name' {...register('name', {required: true})} />
          <TextField variant='filled' label='Email' type='email' {...register('email', {required: true})} />
          <TextField variant='filled' label='Contraseña' type='password' {...register('password', {required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/})} />
          <Button type='submit' variant='contained' color='primary'>
            Crear nuevo usuario
          </Button>
        </Stack>
      </form>
    </Container>
  </>
    
  )
};

export default RegisterForm ;
