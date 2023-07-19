import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoWhite from '../../assets/logos/logowhite.png';

import { AppBar, Box, Toolbar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



//TO DO: IMPLEMENTAR EL BOTÓN DE CLICK EN "IR A MI PANEL" Y QUE NOS LLEVE A LA RUTA /HOUSEPANEL

const HomepageNavMenu = () => {
  return (
    //<BrowserRouter>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          
          <Link to='/'>
            <img className='logoWhite' src={logoWhite} alt='homehub'/> 
          </Link>

          <Box sx={{width:'100%', display:'flex', alignItems: 'center', justifyContent:'flex-end'}}>
            <Link to='/register'>
              <Button sx={{m:'1rem', color: 'white'}}>Registrarme</Button> 
            </Link>

            <Link to='/login'>
              <Button  sx={{color: 'white'}}>Ir a mi panel</Button> 
            </Link>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
   // </BrowserRouter>
  );
}

export default HomepageNavMenu;