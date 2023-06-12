import React from 'react';
import { Paper, Typography, IconButton, Button, Box } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddRoomForm from '../forms/AddRoomForm/index';
import RoomsList from '../RoomsList/RoomsList';
import HubNavBar from '../MenuBars/HubNavBar';


const HousePanel = () => {

  const [ AddRoomPopup, toggleAddRoomPopup ] = useState(false);

  return (
    <>
    <HubNavBar></HubNavBar>
    <Box sx= {{
        p: '2rem'
    }}>
        <Paper elevation={4} sx={{
            p: '2rem',
            marginBottom: '2rem',
            backgroundColor:'#FCFCFC'
        }}>
            <Typography variant='h4'>Bienvenido al panel de control de tu vivienda:</Typography>
            <Typography variant='body1'>En este área puedes visibilizar tus diferentes estancias y el número de dispositivos conectados en cada una de ellas.</Typography>
        </Paper>

        
        {/* <Box sx={{display: 'flex', padding: '1rem'}}>
          <Typography variant='h6'>Añadir una nueva estancia:</Typography>
          <IconButton color='primary'>
            <AddBoxIcon></AddBoxIcon>
          </IconButton>
        </Box> */}

        <Button color='primary' variant='contained' startIcon={<AddBoxIcon/>} 
        sx={{marginBottom: '2rem'}}
        onClick={ () => toggleAddRoomPopup(true)}>
          Añadir nueva estancia
        </Button>
        { AddRoomPopup && <AddRoomForm closePopUp={ toggleAddRoomPopup } /> }
    
        <RoomsList></RoomsList>

    </Box>
    </>
  )
}

export default HousePanel