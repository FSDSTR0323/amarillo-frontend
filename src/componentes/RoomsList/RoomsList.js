import React from 'react'
import { useState, useEffect } from 'react';
import { getAllRooms } from '../../apiService';
import { Box } from '@mui/material';
import RoomCard from '../RoomsList/RoomCard/index.js'

const RoomsList = () => {
    const [ rooms, setRooms ] = useState([]);
    //useState() es una función que crea internamente una variable donde podremos almacenar el estado de nuestro componente
    //const [count, setCount] = useState([])
    //UseState: función, desectructuro el array de useState y como valor inicial tomo un objeto vacío

    console.log( rooms );

    // useEffect(), función
    // Esta función se ejecuta por defecto cuando el componente se renderiza por primera vez, y después cada vez que el componente se actualice.
    // segundo parámetro: elemes de los qe depende-> no vacío [] se ejecutará cuando cambie nuo de esos elems
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