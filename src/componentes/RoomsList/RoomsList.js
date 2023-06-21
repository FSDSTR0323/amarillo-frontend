import React from 'react'
import { useState, useEffect } from 'react';
import { getAllRooms } from '../../apiService';

import { Grid, Card } from '@mui/material';
import { CardActionArea, CardActions, IconButton, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//Imágenes
import bedroom from '../../assets/imgs/bedroom1.jpg'


import DeleteRoomPopUp from './RoomCard/DeleteRoomPopUp';

const RoomsList = () => {
    const [ rooms, setRooms ] = useState([]);
    const [ deletePopUp, toggleDeletePopUp ] = useState(false);
    //useState() es una función que crea internamente una variable donde podremos almacenar el estado de nuestro componente
    console.log( rooms );

    // useEffect(), función
    // Esta función se ejecuta por defecto cuando el componente se renderiza por primera vez, y después cada vez que el componente se actualice. Segundo parámetro: elemes de los qe depende-> no vacío [] se ejecutará cuando cambie nuo de esos elems
    useEffect(() => {
        getAllRooms()
            .then( data => {
                console.log('Esta es la info del backend: ', data);
                setRooms(data)
             })
            .catch( error => console.error(error))
    }, []);

    return (
        <Grid container spacing={2}>
            { rooms.length > 0 ? rooms.map( room => {
                return (
                    <Grid item xs={12} sm={6} md={3} key={room._id}>
                        <Card sx={{ boxShadow: '4px 8px 8px -4px rgb(202, 213, 216)'}}>

                            <CardActionArea>
                                <img className='cardImage' src={bedroom} alt='bedroom' />
                                
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    { room.name }
                                </Typography>
                                <Typography gutterBottom variant="body1" sx={{color: '#A1A1A1'}} component="div">
                                    { room.type }
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Los dispositivos conectados en esta estancia son: { room.devices }
                                </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions>
                                <IconButton 
                                color='primary' 
                                onClick={() => toggleDeletePopUp(true) }>
                                <DeleteIcon></DeleteIcon>
                                </IconButton>
                                { deletePopUp && <DeleteRoomPopUp closePopUp={toggleDeletePopUp}></DeleteRoomPopUp>}
                            </CardActions>
                        </Card>
                    </Grid>
                )
            }) : null }
        </Grid> 
  )
};

export default RoomsList;

//ESTRUCTURA DEL GRID ITEM
//{rooms.length > 0 ? rooms.map( room => <RoomCard key={room._id} name={ room.name } type={ room.type }/>) : null }
//LA LÓGICA QUE QUEREMOS IMPLEMENTAR ES QUE POR CADA GRID ITEM SE PINTE UNA CARTA.
{/* <Grid item xs={12} sm={6} md={3}>
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
             </Grid> */}