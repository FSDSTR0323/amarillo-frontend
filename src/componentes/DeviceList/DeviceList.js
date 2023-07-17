import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { deleteDevice, getDevices } from '../../apiService';

//MATERIAL UI COMPONENTS
import { CardActionArea, CardActions, IconButton, CardContent, Typography, Box, Switch, Grid, Card, Slider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ScheduleIcon from '@mui/icons-material/Schedule';


const DeviceList = ( {refresh} ) => {
    const [ devices, setDevices ] = useState([]);

    const roomId = useParams().slug

    const refreshDevices = () => {
        getDevices(roomId)
            .then( data => {
                console.log('Esta es la info del backend: ', data);
                const deviceData = data
                setDevices(deviceData)
             })
            .catch( error => console.error(error))
    };
    console.log('Estos son los dispositivos: ', devices);

    useEffect(() => {
        refreshDevices()
    }, [refresh]);

    const onDelete = async(deviceId) => {
        await deleteDevice(deviceId, roomId)
        refreshDevices()
    };

    const SliderOrSwitch = (deviceType) => {
        if(deviceType === 'temperature' ){
            return (
            <Slider
                defaultValue={21}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={10}
                max={30}
                sx={{marginLeft:'2rem', marginRight:'2rem'}} 
            />
            )
        } else {
            return <Switch />
        }
    }
  
    return (
        <Grid container spacing={2}>
            { devices.length > 0 ? devices.map( device => {
                return (
                    <Grid item xs={6} sm={6} md={4} key={device._id}>
                        <Card className='deviceCard' sx={{ boxShadow: '4px 8px 8px -4px rgb(202, 213, 216)', border:'solid 1px #f2f2f2', borderRadius:'1rem',}}>

                            {/* <CardActionArea>                                  */}
                                <CardContent>

                                <Typography gutterBottom variant="h5" component="div">
                                    { device.name }
                                </Typography>
                                <Typography gutterBottom variant="body1" sx={{color: '#A1A1A1'}} component="div">
                                    { device.deviceType }
                                </Typography>
                                
                                </CardContent>
                            {/* </CardActionArea> */}

                            <CardActions>

                                <Box sx={{display: 'flex', width:'100%', justifyContent: 'space-between'}}>
                                    <Box sx={{display:'flex'}}>
                                    <IconButton
                                    color='primary' 
                                    onClick={() => {
                                        window.confirm('¿Quieres eliminar por completo los datos de este dispositivo?') && onDelete(device._id)
                                        console.log(device._id)
                                        }}>
                                        <DeleteIcon></DeleteIcon>
                                    </IconButton>
                                    <IconButton
                                    color='primary' 
                                    onClick={() => console.log('Programación de los horarios de este dispositivo.')}>
                                        <ScheduleIcon></ScheduleIcon>
                                    </IconButton>
                                    </Box>
                                    
                                    { SliderOrSwitch(device.deviceType) }
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            }) : null }
        </Grid> 
  )
};

export default DeviceList;
