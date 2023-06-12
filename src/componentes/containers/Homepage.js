import React from 'react';
import './styles.css';

import { Box, Paper, Card, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import FlareIcon from '@mui/icons-material/Flare';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import SecurityIcon from '@mui/icons-material/Security';

//Imágenes
import banner1 from '../../assets/imgs/banner1-homehub_Mesa de trabajo 1.jpg';
import hhbrand from '../../assets/imgs/hhbrand1.jpeg';


import HomepageNavMenu from '../MenuBars/HomepageNavMenu';
import Footer from '../HomeFooter/index';

const homepageImages = require.context('../../assets/imgs', true);

const Homepage = () => {
  return (
    <>
        <HomepageNavMenu></HomepageNavMenu>
        {/* Hero de la Homepage */}
        <Box sx={{ backgroundImage: `url(https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)`, backgroundRepeat:'false' ,height:'80vh', display:'flex', flexDirection:'column', justifyContent: 'center', color:'#252525'}}>
          <Typography variant='h1' sx={{paddingLeft: '7rem', color:'white', fontSize:'3.5rem' }}>¡Bienvenido a HomeHub360!</Typography>
          <Typography variant='body1' sx={{paddingLeft: '7rem', paddingTop: '3rem', maxWidth:'60%', color:'whitesmoke' }}>Transforma tu hogar en un espacio inteligente y conectado con nuestra innovadora  aplicación de domótica. HomeHub360 te ofrece el control total de tus dispositivos domésticos desde la comodidad de tu smartphone.</Typography>
          <Typography variant='h5' sx={{paddingLeft: '7rem', marginTop:'2rem', maxWidth:'40%', color:'#28E5FF' }}>Simplifica tu vida cotidiana y experimenta una nueva forma de vivir en tu hogar.</Typography>
          {/* <Link to='/register'>
              <Button color='primary' sx={{m:'7rem', color:'white'}}>¡Registrarme ahora!</Button>
          </Link> */}
        </Box>

        {/* Beneficios de usar nuestra app */}
        <Box sx={{bgcolor:'#FFFFFF', padding: '2rem'}}>
            <Typography variant='h5' align='center' sx={{color: '#303030'}}>Todo lo que te ofrece homehub360.</Typography>
            <Box sx={{display: 'flex', justifyContent:'center', columnGap: '2.5rem'}}>

              <Card sx={{marginTop: '2rem', marginBottom:'2rem', p: '2rem', flexGrow:'1', color:'#f1f1f1', boxShadow:'4px 8px 8px -4px rgb(202, 213, 216)'}}>
                <ControlCameraIcon fontSize='large' sx={{color:'#28E5FF'}}></ControlCameraIcon>
                <Typography variant='h5' align='center' sx={{color: '#28E5FF'}}>Control intuitivo</Typography>
                <Typography variant='body1' sx={{color:'#252525', paddingTop:'1rem'}}>Nuestra interfaz de usuario fácil de usar te permite controlar y personalizar tus dispositivos con solo unos pocos toques. Enciende las luces, ajusta la temperatura, controla las persianas y más, todo desde una sola aplicación.</Typography>
              </Card>

              <Card sx={{marginTop: '2rem', marginBottom:'2rem', p: '2rem', flexGrow:'1', color:'#f1f1f1', boxShadow:'4px 8px 8px -4px rgb(202, 213, 216)'}}>
                <FlareIcon fontSize='large' sx={{color:'#28E5FF'}}></FlareIcon>
                <Typography variant='h5' align='center' sx={{color: '#28E5FF'}}>Automatización inteligente</Typography>
                <Typography variant='body1' sx={{color:'#252525', paddingTop:'1rem'}}>Programa acciones automatizadas para adaptarse a tu estilo de vida. Crea escenas personalizadas para diferentes momentos del día o situaciones específicas. Despierta con una suave iluminación, prepara el ambiente para una noche de cine o configura el modo de ausencia para simular que hay alguien en casa cuando estás fuera.</Typography>
              </Card>

              <Card sx={{marginTop: '2rem', marginBottom:'2rem', p: '2rem', flexGrow:'1', color:'#f1f1f1', boxShadow:'4px 8px 8px -4px rgb(202, 213, 216)' }}>
                <SettingsPowerIcon fontSize='large' sx={{color:'#28E5FF'}} />
                <Typography variant='h5' align='center' sx={{color: '#28E5FF'}}>Ahorro energético</Typography>
                <Typography variant='body1' sx={{color:'#252525', paddingTop:'1rem'}}>Optimiza el consumo energético de tu hogar y reduce tu factura. Con HomeHub360, puedes supervisar el uso de energía de tus dispositivos y recibir sugerencias inteligentes para ahorrar energía sin comprometer tu comodidad.</Typography>
              </Card>

              <Card sx={{marginTop: '2rem', marginBottom:'2rem', p: '2rem', flexGrow:'1', color:'#f1f1f1', boxShadow:'4px 8px 8px -4px rgb(202, 213, 216)' }}>
                <SecurityIcon fontSize='large' sx={{color:'#28E5FF'}} />
                <Typography variant='h5' align='center' sx={{color: '#28E5FF'}}>Seguridad avanzada</Typography>
                <Typography variant='body1' sx={{color:'#252525', paddingTop:'1rem'}}>Mantén tu hogar seguro y protegido en todo momento. Accede a las cámaras de seguridad desde cualquier lugar, recibe notificaciones instantáneas sobre actividades sospechosas y activa alarmas de seguridad para mantener alejados a los intrusos.</Typography>
              </Card>
            </Box>
        </Box>

        <Box>
          <img className='banner360' src={banner1} alt='HomeHub360' />
        </Box>
        <Footer></Footer>
    </>
  )
}

export default Homepage