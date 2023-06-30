import React from "react";
//MATERIAL UI
import { Paper, Typography, IconButton, Button, Box } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

//Componentes
import HubNavBar from "../MenuBars/HubNavBar";
import NewHouseForm from "../forms/newHouseForm";
import HousesList from "../HousesList/HousesList";


const MyHousesPanel = () => {
    return (
    <> 
        <HubNavBar></HubNavBar>
        
        <Box sx= {{
        p: '2rem'
        }}>
        <Paper elevation={8} sx={{
            p: '2rem',
            marginBottom: '2rem',
            backgroundColor:'#FCFCFC'
        }}>
            <Typography variant='h4'>Te damos la bienvenida a HomeHub.</Typography>
            <Typography variant='body1' sx={{paddingTop:'1rem'}}>En este área puedes registrar y guardar tus diferentes viviendas.</Typography>
        </Paper>
        
        {/* DENTRO DE ESTE BOTÓN IMPLEMENTAMOS LA LÓGICA DEL POP UP PARA AÑADIR UNA NUEVA VIVIENDA --- NEWHOUSEFORM */}
        <Button color='primary' variant='contained' startIcon={<AddBoxIcon/>} 
        sx={{marginBottom: '2rem'}}
        onClick={ () => ''}>
          Añadir nueva vivienda
        </Button>

        {/* A PARTIR DE AQUÍ TENEMOS LAS CARDS CON CADA VIVIENDA SIGUIENDO LA MISMA LÓGICA QUE EN EL PANEL DE ESTANCIAS ---- HOUSESLIST.JS */}
        <HousesList></HousesList>
        </Box>
    </>
    )
};

export default MyHousesPanel