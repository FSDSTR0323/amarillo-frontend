import React from 'react'
import Lottie from 'lottie-react';
import { Box, Typography, Button } from '@mui/material';
import animationSync from '../../../assets/imgs/homehubAnimateSync.json';


const SyncPopUp = ({closePopUp}) => {
  return (
    <Box className='overlay' sx={{width:'100vw', height:'100vh', position: 'fixed', top:'0', left:'0', bgcolor:'#66666680', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Box className='boxContainer' sx={{maxWidth:'450px', minHeight:'500px', bgcolor:'#f2f2f2', borderRadius:'1rem', boxShadow:'4px 8px 8px -4px rgb(135, 135, 135)'}}>
            <Typography variant='h6' sx={{textAlign:'center', color:'AEAEAE', p:'3rem 2rem 0rem 2rem', fontSize:'1rem'}}>Estamos sincronizando los dispositivos conectados a su red   local. La sincronización puede tardar unos segundos...</Typography>

            {/* <LottiePlayer src='https://lottie.host/bd99464f-5434-4297-86f9-39792bcb8e19/zKklFdLSi8.json' className='player' loop autoplay /> */}
            <Lottie className='animationPhone' animationData={animationSync} />
            <Box sx={{display:'flex', justifyContent:'center', alignContent:'center'}}>
                <Button 
                    variant='contained' 
                    color='success' 
                    sx={{marginBottom:'2rem'}}
                    onClick={()=>closePopUp(false)}
                    >¡Hecho!
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default SyncPopUp;