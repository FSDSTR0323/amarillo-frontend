import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, Button, Typography } from '@mui/material';
import { Paper } from '@mui/material';

const RoomPanel = () => {
    const {slug} = useParams();

  return (
   <Container>
        <Paper elevation={3} sx={{
            p: '2rem',
            marginTop: '1rem',
            marginBottom: '1rem'
        }}>
            <Typography variant='h6'>En esta parte podemos configurar y editar los dispositivos de nuestra habitación</Typography>
        </Paper>

        <Paper elevation={3} sx={{
            p: '2rem'
        }}>
            <Typography variant='h4'>{slug}</Typography>
        </Paper>
   </Container>
  )
};

export default RoomPanel