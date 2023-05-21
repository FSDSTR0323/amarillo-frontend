import React from 'react';
import { Container, Paper, Card, Typography, Button } from '@mui/material';

import HomepageNavMenu from '../HomepageNavMenu';


const Homepage = () => {
  return (
    <>
        <HomepageNavMenu> </HomepageNavMenu>
        <Typography variant='h4' sx={{m: '2rem' }}>Bienvenido a la App</Typography>
        <Typography variant='body1' sx={{m: '2rem' }}>Se trata de una app de domótica para el hogar.</Typography>

        <Container>
            <Typography variant='h4'>Servicios que prestamos</Typography>
            <Card sx={{marginTop: '2rem', marginBottom:'2rem', p: '2rem' }}>Servicio 1</Card>
            <Card sx={{marginTop: '2rem', marginBottom:'2rem', p: '2rem' }}>Servicio 1</Card>
            <Card sx={{marginTop: '2rem', marginBottom:'2rem', p: '2rem' }}>Servicio 1</Card>
        </Container>
    </>
  )
}

export default Homepage