import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Instagram, Twitter, Facebook } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <Box sx={{backgroundImage: `url('https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')` ,height:'40vh', bgcolor: 'white', display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
        <Typography variant='h5' sx={{paddingLeft:'3rem', paddingBottom:'2rem', color:'#EAEAEA'}}>Simplifica y conecta tu día a día.</Typography>
        
        <Box sx={{display: 'flex', flexDirection: 'row', paddingLeft:'3rem', paddingBottom:'2rem'}}>
            <IconButton color='primary'>
                <Instagram />
            </IconButton>

            <IconButton color='primary'>
                <Twitter />
            </IconButton>

            <IconButton color='primary'>
                <Facebook />
            </IconButton>

        </Box>
        <Typography variant='h6' fontSize={'small'} align='center' sx={{paddingTop:'4rem', color:'#EAEAEA'}}>| Privacidad y aviso legal | Nuclio 2023 |</Typography>
    </Box>
  )
}

export default Footer