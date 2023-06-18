import React from 'react'
import { useState, useEffect } from 'react';
import { getAllDevices } from '../../apiService';

//MATERIAL UI COMPONENTS
import { Grid, Card } from '@mui/material';
import { CardActionArea, CardActions, IconButton, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DeviceList = () => {
    const [ devices, setDevices ] = useState([]);
    console.log( devices );

    useEffect(() => {
        getAllDevices()
            .then( data => {
                console.log('Esta es la info del backend: ', data);
                setDevices(data)
             })
            .catch( error => console.error(error))
    }, []);
  
    return (

        <Grid container spacing={2}>
            { devices.length > 0 ? rooms.map( device => {
                return (
                    <Grid item xs={12} sm={6} md={3} key={room._id}>
                        <Card sx={{ boxShadow: '4px 8px 8px -4px rgb(202, 213, 216)'}}>

                            <CardActionArea>
                                <img className='cardImage' src={bedroom} alt='bedroom' />
                                
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    { device.name }
                                </Typography>
                                <Typography gutterBottom variant="body1" sx={{color: '#A1A1A1'}} component="div">
                                    { device.type }
                                </Typography>
                                

                                </CardContent>
                            </CardActionArea>

                            <CardActions>
                                <IconButton 
                                color='primary' 
                                onClick={() => toggleDeletePopUp(true) }>
                                <DeleteIcon></DeleteIcon>
                                </IconButton>
                                {/* { deletePopUp && <DeleteRoomPopUp closePopUp={toggleDeletePopUp}></DeleteRoomPopUp>} */}
                            </CardActions>
                        </Card>
                    </Grid>
                )
            }) : null }
        </Grid> 
  )
};

export default DeviceList;


//ESTRUCTURA ANTIGUA
        // <Box sx={{
        //     display: 'flex',
        //     flexDirection: 'row',
        //     gap: '2rem'
        // }}>
        // {/* <Grid container spacing={2}> */}
        // {devices.length > 0 ? devices.map( device => <DeviceCard key={device._id} name={ device.name } type={ device.deviceType } status={ device.status }/>) : null }
        // {/* </Grid> */}
        // </Box>

//LÓGICA PARA PINTAR LOS DEVICES:
        // {devices.length > 0 ? devices.map( device => <DeviceCard key={device._id} name={ device.name } type={ device.deviceType } status={ device.status }/>) : null }