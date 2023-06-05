import React from 'react';
import { Container, Paper, Typography, IconButton, Button, Box } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddRoomForm from '../forms/AddRoomForm';
import RoomsList from '../RoomsList/RoomsList';
import HubNavBar from '../MenuBars/HubNavBar';

const HousePanel = () => {

  const [ AddRoomPopup, toggleAddRoomPopup ] = useState(false);

  return (
    <>
    <HubNavBar></HubNavBar>
    <Container sx= {{
        p: '2rem'
    }}>
        <Paper elevation={3} sx={{
            p: '2rem',
            marginBottom: '2rem'
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
        onclick={ () => toggleAddRoomPopup(!AddRoomPopup)}>
          Añadir nueva estancia
        </Button>
        {AddRoomPopup && <AddRoomForm></AddRoomForm>}

        <RoomsList></RoomsList>

    </Container>
    </>
  )
}

export default HousePanel