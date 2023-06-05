import React from 'react'
import { useState, useEffect } from 'react';
import { getAllRooms } from '../../apiService';
import { Box } from '@mui/material';
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
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2rem'
        }}>
        {/* <Grid container spacing={2}> */}
        {rooms.length > 0 ? rooms.map( room => <RoomCard key={room._id} name={ room.name } />) : null }
        {/* </Grid> */}
        </Box>
  )
};

export default RoomsList;