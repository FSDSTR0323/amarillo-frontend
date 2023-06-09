import React from 'react'
import { useState, useEffect } from 'react';
import { getAllDevices } from '../../apiService';
import { Container, Typography, Button, Grid } from '@mui/material';
import DeviceCard from './DeviceCard';


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
        <>
        {/* <Grid container spacing={2}> */}
        {devices.length > 0 ? devices.map( device => <DeviceCard key={device._id} name={ device.name } type={ device.deviceType } status={ device.status }/>) : null }
        {/* </Grid> */}
        </>
  )
};

export default DeviceList;