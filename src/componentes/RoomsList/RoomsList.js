import React from 'react'
import { useState, useEffect } from 'react';
import { getAllRooms } from '../../apiService';
import { Grid, Card } from '@mui/material';


//Pruebas
import { CardActionArea, CardActions, IconButton, CardContent, Typography } from '@mui/material';
import bedroom from '../../assets/imgs/bedroom1.jpg'


import RoomCard from '../RoomsList/RoomCard/index.js'

const RoomsList = () => {
    const [ rooms, setRooms ] = useState([]);
    //useState() es una función que crea internamente una variable donde podremos almacenar el estado de nuestro componente
    //const [count, setCount] = useState([])
    //UseState: función, desectructuro el array de useState y como valor inicial tomo un objeto vacío

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


//DENTRO DE LA FUNCIÓN HE INCLUIDO LA LLAMADA A ROOM.TYPE  
//{rooms.length > 0 ? rooms.map( room => <RoomCard key={room._id} name={ room.name } type={ room.type }/>) : null }

    return (
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>1</Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>2</Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card>
                        Aquí tenemos que llamar al componente RoomCard bien hecho para que pueda adquirir bien los estilos del Grid.
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ boxShadow: '4px 8px 8px -4px rgb(202, 213, 216)'}}>
                        <CardActionArea>
                            
                            <img className='cardImage' src={bedroom} alt='bedroom' />
                            
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Name
                            </Typography>
                            <Typography gutterBottom variant="body1" sx={{color: '#EAEAEA'}} component="div">
                            Type
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Los dispositivos conectados en esta estancia son:
                            </Typography>
                            </CardContent>

                        </CardActionArea>

                        <CardActions>
                            Delete
                        </CardActions>

                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    {rooms.length > 0 ? rooms.map( room => <RoomCard key={room._id} name={ room.name } type={ room.type }/>) : null }
                </Grid>

            </Grid>
        
  )
};

export default RoomsList;