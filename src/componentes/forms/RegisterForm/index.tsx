import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

import HomepageNavMenu from '../../MenuBars/HomepageNavMenu';
import './styles.css';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import registerWall from '../../../assets/imgs/registerWall.jpeg';
import { useForm } from 'react-hook-form';

import Footer from '../../HomeFooter';


const RegisterForm = () => {

  const { register, handleSubmit, formState: { errors }} = useForm();
  const { signUp, isAuthenticated, errors: registerError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(isAuthenticated) navigate('/housePanel')
  }, [isAuthenticated])


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

            
            {
              registerError.map( (error, i) => (
                <>
                <Box sx={{bgcolor: '#FC3F25', color: '#FFFFFF'}} key='i'>
                  <Typography>{error}</Typography>
                </Box>
                </>
              ))
            }

          <form onSubmit={handleSubmit( async (values) => {
            signUp(values)
          })}> 
          
            <Stack spacing={2} width={400}>
                      
              <TextField variant='filled' label='Nombre' type='name' {...register('name', {required: true})} />
              {errors.name?.type === 'required' && <Typography variant='body1' sx={{ color:'#FC3F25', fontSize: '0,5rem'}}>Este campo es requerido.</Typography>}

              <TextField variant='filled' label='Email' type='email' {...register('email', {required: true, pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i})} />
              {errors.email?.type === 'required' && <Typography variant='body1' sx={{ color:'#FC3F25', fontSize: '0,5rem'}}>Este campo es requerido.</Typography>}


              <TextField variant='filled' label='Contraseña' type='password' {...register('password', {required: true})} />
              {/* pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ */}
              {errors.password?.type === 'required' && <Typography variant='body1' sx={{ color:'#FC3F25', fontSize: '0,5rem'}}>Este campo es requerido.</Typography>}

              <Button type='submit' variant='contained' color='primary'>
                Crear nuevo usuario
              </Button>

              <Typography variant='h6' sx={{fontSize: '0.8rem'}} onClick={()=> navigate('/login')}>Ya tengo una cuenta en HomeHub</Typography>

            </Stack>
          </form>
        </Box>
      </Box>
      <Footer />
    </>
  )
};

export default RegisterForm ;
