import * as React from 'react';
import { Router } from 'react-router-dom';
import { logUserOut } from '../../apiService';

//MATERIAL UI
import { Typography, Button, IconButton, Box, AppBar, Toolbar } from '@mui/material';

//ICONOS
import HomeIcon from '@mui/icons-material/Home';
import { HomeMax } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';

const HubNavBar = () => {



    return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static">
        <Toolbar>
        <Link to='/myHouses'>
        <IconButton sx={{color: 'white'}}>
          <HomeIcon></HomeIcon>
        </IconButton> 
        </Link>

          {/* <Button color="inherit" sx={{m:'1rem'}}>BOTÓN CASA/S</Button> */}

          <Typography variant="h6" component="div" sx={{flexGrow: 1, marginLeft:'2rem'}}>
            HomeHub
          </Typography>

          <Button color='primary' variant='filled' startIcon={<TuneIcon/>} 
                onClick={ () => ''}
                >AJUSTES
                </Button>

          <Button color='primary' variant='filled' startIcon={<PersonIcon/>} 
                onClick={ () => ''}>
                USUARIO
                </Button> 

          <Button color='primary' variant='filled' startIcon={<LogoutIcon/>} 
                onClick={ () => logUserOut()}>
                CERRAR SESIÓN
                </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HubNavBar