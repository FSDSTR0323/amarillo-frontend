import React from 'react';
import HomepageNavMenu from '../../MenuBars/HomepageNavMenu';
import './styles.css';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import registerWall from '../../../assets/imgs/registerWall.jpeg';
import { useForm, Controller } from 'react-hook-form';
import { registerUser } from '../../../apiService';

const RegisterForm = () => {

  // const form = useForm<FormValues>({
  //   defaultValues: {
  //     email: '',
  //     password: ''
  //   }
  // });

  const { register, handleSubmit } = useForm() ;
  
  const onSubmit = ( userData ) => {
    console.log(userData);
    registerUser(userData.name, userData.email, userData.password);
  };

  //TO DO: IMPLEMENTAR ERRORES EN EL FORMULARIO DE LOGIN
  return (
    <>
    <HomepageNavMenu></HomepageNavMenu>
      <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <Box className='wall'>
          <img className='registerImg' src={registerWall} alt='register'></img>
        </Box>
          
        <Box className='registerBox' sx={{paddingTop: '5rem', paddingLeft: '6rem'}}>
            <Typography variant='h4' sx={{paddingBottom: '2rem'}}>Formulario de registro</Typography>
            <Typography variant='body1' sx={{paddingBottom: '2rem', paddingRight:'12rem'}}>Introduce tus datos para poder crear tu perfil de usuario en la aplicación.</Typography>

          <form onSubmit={handleSubmit(onSubmit)}> 
            <Stack spacing={2} width={400}>
                      
              <TextField variant='filled' label='Nombre' type='name' {...register('name', {required: true})} />

              <TextField variant='filled' label='Email' type='email' {...register('email', {required: true, pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i})} />

              <TextField variant='filled' label='Contraseña' type='password' {...register('password', {required: true})} />
              {/* pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ */}

              <Button type='submit' variant='contained' color='primary'>
                Crear nuevo usuario
              </Button>

            </Stack>
          </form>
        </Box>
      </Box>
    </>
  )
};

export default RegisterForm ;
