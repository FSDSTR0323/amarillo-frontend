import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const DeleteHousePopUp = ({closePopUp}) => {
  return (
    <Box className='deleteHouse'>
        <Box className='deletePopUp'>
            <Typography variant='h6' sx={{fontSize:'0.8rem'}}>¿Estás seguro de que quieres eliminar esta vivienda y los dispositivos conectados en ella?</Typography>
            <Button type='cancel' variant='outlined' color='info' onClick={() => closePopUp(false)}>Cancelar</Button>
            <Button 
            variant='contained' 
            color='primary' 
            sx={{marginLeft:2}} 
            onClick={() => deleteHouse() }>
              Aceptar</Button>
        </Box>
    </Box>
  )
};

export default DeleteHousePopUp