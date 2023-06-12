import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { Container, Button, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import AddDeviceForm from '../forms/AddDeviceForm';
import DeviceList from '../DeviceList/DeviceList';
import HubNavBar from '../MenuBars/HubNavBar';

const RoomPanel = () => {
    const [ AddDevicePopup, toggleAddDevicePopup ] = useState(false);

    const {slug} = useParams();
    const typeOfRooms = ['KITCHEN', 'LOUNGE', 'ROOM', 'BATHROOM', 'GARDEN', 'DINING ROOM']
    return (
        <>
        <HubNavBar></HubNavBar>
        <Container sx= {{
            p: '2rem'
        }}>
                <Paper elevation={3} sx={{
                    p: '2rem',
                    marginTop: '1rem',
                    marginBottom: '1rem'
                }}>
                    <Typography variant='h4'>Bienvenido al panel de los dispositivos de tu {slug}:</Typography>
                    <Typography variant='body1'>En este área puedes visibilizar tus diferentes dispositivos y el estado de cada uno de ellos.</Typography>
                </Paper>
                        
                <Button color='primary' variant='contained' startIcon={<AddBoxIcon/>} 
                sx={{marginBottom: '2rem'}}
                onClick={ () => toggleAddDevicePopup(true)}>
                Añadir nuevo dispositivo
                </Button>
                {AddDevicePopup && <AddDeviceForm closePopUp={toggleAddDevicePopup}></AddDeviceForm>}
                
                <DeviceList></DeviceList>
        </Container>
        </>
    )
        
};

export default RoomPanel