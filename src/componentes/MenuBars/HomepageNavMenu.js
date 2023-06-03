import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


//TO DO: IMPLEMENTAR EL BOTÓN DE CLICK EN "IR A MI PANEL" Y QUE NOS LLEVE A LA RUTA /HOUSEPANEL

const HomepageNavMenu = () => {
  return (
    //<BrowserRouter>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: '#303030'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Link to='/homepage'>
            <Button sx={{m:'1rem', color: 'white'}}>HomeHub360</Button> 
          </Link>

          <Link to='/register'>
            <Button sx={{m:'1rem', color: 'white'}}>Registrarme</Button> 
          </Link>

          <Link to='/login'>
            <Button  sx={{color: 'white'}}>Ir a mi panel</Button> 
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
   // </BrowserRouter>
  );
}

export default HomepageNavMenu;