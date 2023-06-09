import React from 'react';
import { Container, Typography, TextField, Button, Stack, Box } from '@mui/material';
import imagenes from '../../../assets/imagenes';

import { useForm } from 'react-hook-form';
import axios from 'axios';


// type FormValues = {
//     email: String
//     password: string
//   }

const LoginForm = () => {

    // const form = useForm<FormValues>({
    //     defaultValues: {
    //       email: '',
    //       password: ''
    //     }
    //   });
    
      const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
          email: 'usuario@homehub.com',
          password: ''
        }
      }
      ) ;

      const onSubmit = async ( data ) => {
        console.log(data);
        login(data.email, data.password)
        //Yo quiero que los datos que está recibiendo los contraste con el backend.
      };


      //Creamos una función async/await que me lleve los datos al backend con axios.
      const login = async (email, password) => {
        try {
          const response = await axios.post('http://localhost:9000/users/login', {email, password})
          console.log('La respuesta al login es: ', response);
          const token = response.data.token ;

          window.localStorage.setItem('token', token);
        
        } catch(error) {
            console.log(error);
        }
      };

  return (
    <>
      <Box sx={{display: 'flex', flexDirection: 'row', width:'100%', height:'80vh'}}>
        <Box>
          <img src={imagenes.img2} />
        </Box>

        <Box sx={{maxWidth:'100%', display: 'flex', flexDirection: 'column', alignItems:'center', alignContent:'center', justifyContent: 'center'}}>
            <Typography variant='h4' sx={{paddingBottom: '2rem'}}>Bienvenido de nuevo</Typography>
            <Typography variant='body1' sx={{paddingBottom: '2rem'}}>Por favor, introduce tus datos de usuario para acceder a HomeHub.</Typography>
            
            <form onSubmit={handleSubmit(onSubmit)}> 
                <Stack spacing={2} width={400}>
                <TextField variant='filled' label='Email' type='email' {...register('email', {
                  required: true,
                  pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i
                  })} />
                  {errors.email?.type === 'required' && <Typography variant='body1' sx={{ color:'#FFD433', fontSize: '0,5rem'}}>Este campo es requerido.</Typography>}
                  {errors.email?.type === 'pattern' && <Typography variant='body1' sx={{ color:'#FFD433', fontSize: '0,5rem'}}>El formato de email no es válido.</Typography>}
                  
                <TextField variant='filled' label='Contraseña' type='password' {...register('password', {
                  required: true, 
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
                  })} />
                  {errors.password?.type === 'required' && <Typography variant='body1' sx={{ color:'#FFD433', fontSize: '0,5rem'}}>Este campo es requerido.</Typography>}
                <Button type='submit' variant='contained' color='primary'>
                    Acceder a mi panel
                </Button>
                </Stack>
            </form>

        </Box>
      </Box>
    </>
  )
}

export default LoginForm ;