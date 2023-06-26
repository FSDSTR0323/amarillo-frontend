import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { deleteRoom } from '../../../apiService';

const DeleteRoomPopUp = ({closePopUp}) => {
  return (
    <Box className='deleteRoom'>
        <Box className='deletePopUp'>
            <Typography variant='h6' sx={{fontSize:'0.8rem'}}>¿Estás seguro de que quieres eliminar esta estancia y los dispositivos conectados en ella?</Typography>
            <Button
              sx={{marginTop: '1rem', marginBottom:'1rem'}} 
              type='cancel' 
              variant='outlined' 
              color='info' 
              onClick={() => closePopUp(false)}>
                Cancelar</Button>
            <Button
              variant='contained' 
              color='primary' 
              sx={{marginLeft:2, marginTop: '1rem', marginBottom:'1rem'}} 
              onClick={() => deleteRoom() }>
                Aceptar</Button>
        </Box>
    </Box>
  )
};

export default DeleteRoomPopUp