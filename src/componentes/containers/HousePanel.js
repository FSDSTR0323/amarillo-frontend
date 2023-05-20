import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';

const HousePanel = () => {
  return (

    <Container sx= {{
        p: '2rem'
    }}>
        <Paper elevation={3} sx={{
            m: '2rem',
            p: '2rem'
        }}>
            <Typography variant='h4'>Bienvenido al panel de control de tu vivienda:</Typography>
            <Typography variant='body1'>En este área puedes visibilizar tus diferentes estancias y el número de dispositivos conectados en cada una de ellas.</Typography>
        </Paper>
    </Container>
  )
}

export default HousePanel