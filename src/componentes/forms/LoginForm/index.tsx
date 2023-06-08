import React from 'react';
import { Typography, TextField, Button, Stack, Box } from '@mui/material';
import loginpic from '../../../assets/imgs/login-picture.jpeg';
import './styles.css';

import { useForm } from 'react-hook-form';
import axios from 'axios';


const LoginForm = () => {
      //Creamos una función async/await que me lleve los datos al backend con axios.
      const login = async (email, password) => {
        try {
          const response = await axios.post('http://localhost:9000/users/login', {email, password})
          console.log('La respuesta al login es: ', response);
          const token = response.data ;
          console.log('este es el token: ', token);

          window.localStorage.setItem('token', token);
        
        } catch(error) {
            console.log(error);
        }
      };


      const { register, handleSubmit, watch, formState: { errors } } = useForm();
      
      const onSubmit = data => {
        console.log(data);
        login(data.email, data.password)
        //UseNavigate router a pagina de housePanel
      };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
  <>
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
        <Box sx={{width: '50vw'}}>
          <img className='loginImg' src={loginpic} alt='login-picture'/>
        </Box>

    <Box sx={{maxWidth:'100%', display: 'flex', flexDirection: 'column', alignItems:'left', justifyContent: 'top', paddingLeft:'6rem', paddingTop:'4rem'}}>
      <Typography variant='h4' sx={{paddingBottom: '2rem'}}>Bienvenido de nuevo</Typography>
      <Typography variant='body1' sx={{paddingBottom: '2rem'}}>Por favor, introduce tus datos de usuario para acceder a HomeHub.      </Typography>
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <Stack spacing={2} width={400}>
          <input defaultValue="email" {...register("email", {
            required: true,
            pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i
            })} />
          
          {/* include validation with required or other standard HTML validation rules */}
          <input type='password'{...register('password', { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.password?.type === 'required' && <Typography variant='body1' sx={{ color:'#FFD433', fontSize: '0,5rem'}}>Este campo es requerido.</Typography>}
          
          <input type="submit" value='Acceder a mi panel' />
          </Stack>
        </form>
    </Box>
  </Box>
  </>
  );
}

export default LoginForm ;