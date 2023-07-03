import React from 'react';
import { Paper, Typography, IconButton, Button, Box } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddRoomForm from '../forms/AddRoomForm/index';
import RoomsList from '../RoomsList/RoomsList';
import HubNavBar from '../MenuBars/HubNavBar';



const HousePanel = () => {

  const [ addRoomPopup, toggleAddRoomPopup ] = useState(false);
  


  return (
    <>
    <HubNavBar></HubNavBar>
    <Box sx= {{
        p: '2rem'
    }}>
        <Paper elevation={8} sx={{
            p: '2rem',
            marginBottom: '2rem',
            backgroundColor:'#FCFCFC'
        }}>
            <Typography variant='h4'>Panel de control de la vivienda:</Typography>
            <Typography variant='body1' sx={{paddingTop:'1rem'}}>En este área puedes visibilizar tus diferentes estancias y el número de dispositivos conectados en cada una de ellas.</Typography>
        </Paper>

        <Button color='primary' variant='contained' startIcon={<AddBoxIcon/>} 
        sx={{marginBottom: '2rem'}}
        onClick={ () => toggleAddRoomPopup(true)}>
          Añadir nueva estancia
        </Button>
        { addRoomPopup && <AddRoomForm closePopUp={ toggleAddRoomPopup } /> }
    
        <RoomsList refresh={addRoomPopup}></RoomsList>

    </Box>
    </>
  )
}

export default HousePanel