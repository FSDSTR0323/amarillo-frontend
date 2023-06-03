import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, Button, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import AddDevice from '../AddDevice/AddDevice';
import DeviceList from '../DeviceList/DeviceList';

const RoomPanel = () => {
    const {slug} = useParams();
    const typeOfRooms = ['KITCHEN', 'LOUNGE', 'ROOM', 'BATHROOM', 'GARDEN', 'DINING ROOM']
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
                    <Typography variant='h4'>{
                    (typeOfRooms.includes(String(slug).toUpperCase()))?
                    String(slug).toUpperCase():"No es correcta la habitación seleccionada"
                    }</Typography>
                </Paper>
                <AddDevice></AddDevice>
                <DeviceList></DeviceList>
        </Container>
        )
        
};

export default RoomPanel