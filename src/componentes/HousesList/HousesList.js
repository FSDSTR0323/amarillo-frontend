import React from 'react'
import { useState, useEffect } from 'react';
import { getAllRooms } from '../../apiService';
import { Box } from '@mui/material';
import HouseCard from '../HousesList/HouseCard/index.js';



const HousesList = () => {
    const [ houses, setHouses ] = useState([]);
    console.log( houses );

    useEffect(() => {
        getAllHouses()
            .then( data => {
                console.log('Esta es la info del backend: ', data);
                setHouses(data)
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
        {houses.length > 0 ? houses.map( room => <RoomCard key={houses._id} name={ houses.name } />) : null }
        {/* </Grid> */}
        </Box>
  )
};

export default RoomsList;