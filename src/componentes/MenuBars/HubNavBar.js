import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { HomeMax } from '@mui/icons-material';
import { Link } from 'react-router-dom';

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

          <Button color="inherit" sx={{m:'1rem'}}>AJUSTES</Button>

          <Button  color="inherit">USUARIO</Button> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HubNavBar