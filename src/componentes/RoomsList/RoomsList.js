import React from 'react'
import { useState, useEffect } from 'react';
import { getAllRooms } from '../../apiService';
import { Container, Typography, Button, Grid } from '@mui/material';
import RoomCard from '../RoomsList/RoomCard/index.js'

const RoomsList = () => {
    const [ rooms, setRooms ] = useState([]);
    console.log( rooms );

    useEffect(() => {
        getAllRooms()
            .then( data => {
                console.log('Esta es la info del backend: ', data);
                setRooms(data)
             })
            .catch( error => console.error(error))
    }, []);
  
    return (
        <>
        {/* <Grid container spacing={2}> */}
        {rooms.length > 0 ? rooms.map( room => <RoomCard key={room._id} name={ room.name } />) : null }
        {/* </Grid> */}
        </>
  )
};

export default RoomsList;