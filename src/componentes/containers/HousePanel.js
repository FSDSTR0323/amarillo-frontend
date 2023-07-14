import React from 'react';
import './styles.css';

import { Paper, Typography, IconButton, Button, Box } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SyncIcon from '@mui/icons-material/Sync';

import { useState } from 'react';

import AddRoomForm from '../forms/AddRoomForm/index';
import RoomsList from '../RoomsList/RoomsList';
import HubNavBar from '../MenuBars/HubNavBar';
import SyncPopUp from '../forms/syncPopUp/SyncPopUp';



const HousePanel = () => {

  const [ addRoomPopup, toggleAddRoomPopup ] = useState(false);
  const [ syncPopUp, toggleSyncPopUp ] = useState(false);
  


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

        <Box sx={{display: 'flex', gap:'1rem'}}>
          <Button color='primary' variant='contained' startIcon={<AddBoxIcon/>} 
          sx={{marginBottom: '2rem'}}
          onClick={ () => toggleAddRoomPopup(true)}>
            Añadir nueva estancia
          </Button>
          { addRoomPopup && <AddRoomForm closePopUp={ toggleAddRoomPopup } /> }

          <Button color='success' variant='outlined' startIcon={<SyncIcon/>} 
          sx={{marginBottom: '2rem'}}
          onClick={ () => toggleSyncPopUp(true)}>
            Sincronizar dispositivos
          </Button>
          
        </Box>
    
        <RoomsList className='roomsList' refresh={addRoomPopup}></RoomsList>

        {/* Debemos de colocar el PopUp de sincronización debajo de la roomsList para evitar que se solape. */}
        { syncPopUp && <SyncPopUp className='syncPopUp' sx={{zIndex:'1'}} closePopUp={ toggleSyncPopUp } />}

    </Box>
    </>
  )
}

export default HousePanel