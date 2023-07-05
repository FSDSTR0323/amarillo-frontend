import React from 'react'
import { useState, useEffect } from 'react';
import { deleteDevice, getDevices } from '../../apiService';

//MATERIAL UI COMPONENTS
import { Grid, Card } from '@mui/material';
import { CardActionArea, CardActions, IconButton, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const DeviceList = ( {refresh} ) => {
    const [ devices, setDevices ] = useState([]);
    console.log( devices );

    useEffect(() => {
        getDevices()
            .then( data => {
                console.log('Esta es la info del backend: ', data);
                setDevices(data)
             })
            .catch( error => console.error(error))
    }, [refresh]);
  
    return (
        <Grid container spacing={2}>
            { devices.length > 0 ? devices.map( device => {
                return (
                    <Grid item xs={12} sm={6} md={6} key={device._id}>
                        <Card sx={{ boxShadow: '4px 8px 8px -4px rgb(202, 213, 216)'}}>

                            <CardActionArea> 
                                <img className='lightbulb' src='https://thumb.ac-illust.com/bb/bb7ebd3add42ffefa5f8b3471ec4baa8_t.jpeg' alt='lightbulb' />
                                
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
                                onClick={() => {
                                    deleteDevice(device._id)
                                    console.log(device._id)
                                    refresh}}>
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
