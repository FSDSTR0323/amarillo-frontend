import React from 'react';
import Lottie from 'lottie-react';
import { Box, Typography, Button } from '@mui/material';
import cityAnimated from '../../../src/assets/imgs/cityAnimated.json';
import logoBlack from '../../assets/logos/logo150black.jpg'

const NotFoundPage = () => {
  return (
    <Box>
    <Box className='overlay' sx={{width:'100vw', height:'100vh', position: 'fixed', top:'0', left:'0', bgcolor:'#ffffff', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Lottie className='cityAnimated' animationData={cityAnimated} />
    </Box>
    <Box sx={{position:'fixed', top:'30%', left:'30%', alignItems:'center'}}>
      <Typography variant='h3' sx={{textAlign:'center', color:'AEAEAE', p:'3rem 2rem 2rem 2rem', color:'black', fontWeight:'800'}}>¡Te has alejado demasiado!</Typography>
      <Typography variant='body1' sx={{textAlign:'center', color:'#353535'}}>La pagina a la que estás intentando acceder parece que no existe...</Typography>
    </Box>
    </Box>
  )
}

export default NotFoundPage