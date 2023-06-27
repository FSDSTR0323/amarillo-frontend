import React, { useEffect, useState } from 'react';
import './styles.css';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import { loginRequest } from '../../../apiService';

import { Typography, TextField, Button, Stack, Box } from '@mui/material';
import loginpic from '../../../assets/imgs/login-picture.jpeg';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../context/AuthContext';



//HAY QUE IMPLEMENTAR EL HOOK useNavigate -------------
const LoginForm = () => {

      const { register, handleSubmit, formState: { errors } } = useForm();
      const { signIn, isAuthenticated, errors: registerError } = useAuth();

      // const [ loggedUser, setLoggedUser ] = useState(false);
      const navigate = useNavigate();

      // const onSubmit = data => {
      //   console.log(data);
      //   loginRequest(data.email, data.password);
      //   isAuthenticated(true)

        
      // };
      useEffect(() => {
        console.log("autenticado?:", isAuthenticated)
        if(isAuthenticated) navigate('/housePanel')
      } );

  return (
<>
    <Box sx={{display: 'flex'}}>
        <Box sx={{width: '50vw'}}>
          <img className='loginImg' src={loginpic} alt='login-picture'/>
        </Box>
    <Box sx={{maxWidth:'100%', display: 'flex', flexDirection: 'column', alignItems:'left', justifyContent: 'top', paddingLeft:'6rem', paddingTop:'5rem'}}>
      <Typography variant='h4' sx={{paddingBottom: '2rem'}}>Bienvenido de nuevo</Typography>
      <Typography variant='body1' sx={{paddingBottom: '2rem'}}>Por favor, introduce tus datos de usuario para acceder a HomeHub.      </Typography>

        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit( (values)=>{
          signIn(values)
        })}>
          {/* register your input into the hook by invoking the "register" function */}
          <Stack spacing={2} width={400}>
          <TextField variant='filled' defaultValue='' label='Email' {...register("email", {
            required: true,
            pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i
            })} />
          {errors.email?.type === 'required' && <Typography variant='body1' sx={{ color:'#FC3F25', fontSize: '0,5rem'}}>Este campo es requerido.</Typography>}
          {errors.email?.type === 'pattern' && <Typography variant='body1' sx={{ color:'#FC3F25', fontSize: '0,5rem'}}>Introduce un correo válido.</Typography>}

          
          {/* include validation with required or other standard HTML validation rules */}
          <TextField variant='filled' type='password' label='Contraseña' {...register('password', { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.password?.type === 'required' && <Typography variant='body1' sx={{ color:'#FC3F25', fontSize: '0,5rem'}}>Este campo es requerido.</Typography>}

          {/* TODO --- CONTROLAR ERROR DE CONTRASEÑA ERRÓNEA */}
          {errors.password && <Typography variant='body1' sx={{ color:'#FC3F25', fontSize: '0,5rem'}}>Parece que la contraseña no es correcta.</Typography>}
          <Button 
            type="submit" 
            variant='contained'
            // onClick={() => navigate('/housePanel')}
            >Acceder a mi panel
            </Button>
            <Typography variant='h6' sx={{fontSize: '0.8rem'}} onClick={()=> <Navigate to='/register' />}>No estoy registrado en HomeHub</Typography>
          </Stack>
        </form>
    </Box>
  </Box>
  </>
  )
};

export default LoginForm ;