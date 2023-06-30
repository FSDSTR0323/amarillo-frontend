import React from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { deleteRoom, getAllRooms } from '../../apiService';

import { Grid, Card } from '@mui/material';
import { CardActionArea, CardActions, IconButton, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import DeleteRoomPopUp from './RoomCard/DeleteRoomPopUp';
import { Navigate } from 'react-router-dom';

const RoomsList = ( {refresh} ) => {
    const [ rooms, setRooms ] = useState([]);
    const [ deletePopUp, toggleDeletePopUp ] = useState(false);
    //useState() es una función que crea internamente una variable donde podremos almacenar el estado de nuestro componente
    console.log( rooms );

    const navigate = useNavigate();
    const goToRoom = () => {
        navigate(`/housePanel/${room.type}`)
    }

    // useEffect(), función
    // Esta función se ejecuta por defecto cuando el componente se renderiza por primera vez, y después cada vez que el componente se actualice. Segundo parámetro: elemes de los qe depende-> no vacío [] se ejecutará cuando cambie nuo de esos elems
    useEffect(() => {
        getAllRooms()
            .then( data => {
                console.log('Esta es la info del backend: ', data);
                setRooms(data)
             })
            .catch( error => console.error(error))
    }, [refresh]);

const imagePicker = (roomType) => { switch (roomType) {
        case 'Kitchen':
            return <img className='roomPicture' src='https://res.cloudinary.com/dwuej2jjm/image/upload/v1687778447/homehub/kitchen2_yufu0a.jpg' alt='Kitchen/Cocina'/>;
            break;
        case 'Lounge':
            return <img className='roomPicture' src='https://res.cloudinary.com/dwuej2jjm/image/upload/v1687534855/homehub/livingRoom3_epxa8z.jpg' alt='Lounge/Salón'/>
            break;
        case 'Room':
            return <img className='roomPicture' src='https://res.cloudinary.com/dwuej2jjm/image/upload/v1687778377/homehub/bedroom2_okuzvt.jpg' alt='Lounge/Salón'/>
            break;
        case 'Bathroom':
            return <img className='roomPicture' src='https://res.cloudinary.com/dwuej2jjm/image/upload/v1687778985/homehub/bathroom1-homehub_xpu4pv.jpg' alt='Garden/Jardín'/>
        case 'Garden':
            return <img className='roomPicture' src='https://res.cloudinary.com/dwuej2jjm/image/upload/v1687778542/homehub/garden1_pmq2rk.jpg' alt='Garden/Jardín'/>
            break;
        case 'Office':
            return <img className='roomPicture' src='https://res.cloudinary.com/dwuej2jjm/image/upload/v1687778739/homehub/despacho1_mojeju.jpg' alt='Office/Oficina' />
            break;
        default:
            return <img className='roomPicture' src='https://res.cloudinary.com/dwuej2jjm/image/upload/v1687779279/homehub/default1_es7lku.jpg' alt='Default room'/>
    }
};

    return (
        <Grid container spacing={2}>
            { rooms.length > 0 ? rooms.map( room => {
                return (
                    <Grid item xs={12} sm={6} md={3} key={room._id}>
                        <Card sx={{ boxShadow: '4px 8px 8px -4px rgb(202, 213, 216)'}}>

                            <CardActionArea 
                                onClick={ () =>  navigate(`/housePanel/${room._id}`) }>
                                {imagePicker(room.roomType)}
                                
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        { room.name }
                                    </Typography>
                                    <Typography gutterBottom variant="body1" sx={{color: '#A1A1A1'}} component="div">
                                        { room.roomType }
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Los dispositivos conectados en esta estancia son: { room.devices }
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions>
                                <IconButton 
                                color='primary' 
                                onClick={() => {
                                    deleteRoom(room._id)
                                    console.log(room._id)}
                                    }>
                                <DeleteIcon></DeleteIcon>
                                </IconButton>

                                {/* //TODO COMO PODEMOS HACER QUE EL POP UP APAREZCA INDIVIDUALMENTE EN CADA CARD???
                                { deletePopUp && <DeleteRoomPopUp closePopUp={toggleDeletePopUp}></DeleteRoomPopUp>} */}

                            </CardActions>
                        </Card>
                    </Grid>
                )
            }) : null }
        </Grid> 
  )
};

export default RoomsList;
