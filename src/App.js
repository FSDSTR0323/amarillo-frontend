import './App.css';
import React from 'react';
import { Container, Paper, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/system';

/* A partir de aquí vamos a crear nuestro tema.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4400',
      //light, dark, contrastText --- estos son los 4 parámetros dentro de palette-primary.
    }
  }
});
*/


function App() {
  return (
      <Container sx= {{
        p: '2rem'
      }}>
          <Typography variant='h4'>Bienvenido a la App</Typography>
          <Typography variant='body1'>Se trata de una app de domótica para el hogar.</Typography>
      </Container>
  );
}

export default App;
