import React from 'react';
import HubNavBar from '../MenuBars/HubNavBar';

import { Typography, Box, Stack, Button, IconButton, Avatar} from '@mui/material';

//A este panel podrá acceder el usuario desde dentro de la aplicación para consultar su información.
const MyUserPanel = () => {
  return (
    <>
    <HubNavBar></HubNavBar>
    <Box sx={{bgcolor:'#EAEAEA', height:'100vh'}}>
      <Box sx={{ display: "flex", flexDirection:'column', alignItems: "center"}}>
        <Box sx={{marginTop:'2rem', padding: '2rem', width:'650px', justifyContent: "center"}}>
            <Typography variant='h4'>Perfil de usuario</Typography>
            <Typography variant='body1' sx={{paddingTop:'1rem'}}>En esta sección puedes introducir tus datos como usuario de HomeHub y editarlos en cualquier momento. ¡Mantén tus datos bien actualizados para que desde Homehub podamos facilitarte un soporte de calidad!</Typography>
        </Box>
      </Box>

      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Box sx={{margin:'1rem', padding:'2rem',bgcolor:'white', border: 'solid 1px #EAEAEA', borderRadius:'1rem', width: '600px', boxShadow:'4px 8px 8px -4px rgb(202, 213, 216)',  }}>
            <Stack spacing={2} width={600}>
                
                  <Avatar
                    alt='HomeHub Avatar'
                    sx={{ width: 80, height: 80 }}>
                  </Avatar>
                
                <Typography>Nombre/Name</Typography>
                <Typography>Apellido/Surname</Typography>
                <Typography>Email</Typography>
                <Typography>Teléfono de contacto/PhoneNumber</Typography>
                <Typography>Año de nacimiento/Birth year</Typography>

                <Box sx={{display: 'flex', flexDirection: 'row', gap:'1rem', justifyContent: 'center', paddingTop:'2rem', paddingBottom:'1rem'}}>
                    <Button type='cancel' variant='outlined' color='info' onClick={() =>''}>
                        Editar mis datos
                    </Button>
                </Box>
            </Stack>
        </Box>
      </Box>
    </Box>
    </>
  )
};
export default MyUserPanel