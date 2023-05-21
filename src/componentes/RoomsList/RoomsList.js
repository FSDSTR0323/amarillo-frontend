import React from 'react'
import { useState, useEffect } from 'react';
import { getAllRooms } from '../../apiService';
import { Container, Typography, Button } from '@mui/material';
import { RoomCard } from './RoomCard';

const RoomsList = () => {
    const { rooms, setRooms } = useState([]);

    useEffect(() => {
        getAllRooms()
            .then(setRooms)
            .catch( error => console.error(error))
    }, []);
  
    return (
    <Container>
        {rooms.map( room => < RoomCard key={room.id} name={ room.name } />)}
        <Button>Editar</Button>
        <Button>Delete</Button>
    </Container>
  )
};

export default RoomsList;