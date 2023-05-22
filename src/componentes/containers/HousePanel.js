import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RoomsList from '../RoomsList/RoomsList';
import HubNavBar from '../MenuBars/HubNavBar';

const HousePanel = () => {
  return (
    <>
    <HubNavBar></HubNavBar>
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
        
        <RoomsList></RoomsList>
    
    </Container>
    </>
  )
}

export default HousePanel