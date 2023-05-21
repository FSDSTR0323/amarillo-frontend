import React from 'react'
import { useState, useEffect } from 'react';
import { getAllRooms } from '../../apiService';
import { Container, Typography, Button } from '@mui/material';
import { RoomCard } from './RoomCard';

const RoomsList = () => {
    const { Rooms, SetRooms } = useState([]);

    useEffect(() => {
        getAllRooms()
            .then(SetRooms)
            .catch( error => console.error(error))
    }, []);
  
    return (
    <Container>
        { Rooms.map( room => < RoomCard key={room.id} name={ room.name } />)}
        <Button>Editar</Button>
        <Button>Delete</Button>
    </Container>
  )
};

export default RoomsList;