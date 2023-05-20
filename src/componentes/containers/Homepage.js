import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';

import HomepageNavMenu from '../HomepageNavMenu';


const Homepage = () => {
  return (
    
    <Container>

        <HomepageNavMenu> </HomepageNavMenu>

        <Typography variant='h4' sx={{marginTop: '2rem', marginBottom: '2rem' }}>Bienvenido a la App</Typography>
        <Typography variant='body1'>Se trata de una app de domótica para el hogar.</Typography>
    </Container> 
  )
}

export default Homepage