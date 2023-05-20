import * as React from 'react';
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HomeHub360
          </Typography>
          <Button color="inherit" sx={{m:'1rem'}}>Registrarme</Button>
          <Button  color="inherit">Ir a mi panel</Button> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HomepageNavMenu;