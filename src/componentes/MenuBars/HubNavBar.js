import * as React from 'react';

import { Typography, Button, IconButton, Box, AppBar, Toolbar } from '@mui/material';

//ICONOS
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TuneIcon from '@mui/icons-material/Tune';
import LogoutIcon from '@mui/icons-material/Logout';


const HubNavBar = () => {
    return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static">
        <Toolbar>

        <IconButton sx={{color: 'white'}}>
          <HomeIcon></HomeIcon>
        </IconButton>

          {/* <Button color="inherit" sx={{m:'1rem'}}>BOTÓN CASA/S</Button> */}

          <Typography variant="h6" component="div" sx={{flexGrow: 1, marginLeft:'2rem'}}>
            Vivienda en Mata Las Cañas
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
                onClick={ () => LogUserOut()}>
                CERRAR SESIÓN
                </Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HubNavBar