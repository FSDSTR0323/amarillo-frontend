import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

import {useForm} from 'react-hook-form'; 
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Typography, TextField, Button, Stack, Box, FormControl, FormHelperText, InputLabel } from '@mui/material'; 
import { postNewDevice } from '../../../apiService';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

//Dentro de este componente, generamos el pop-up que nos permita añadir un nuevo dispositivo a nuestra estancia
const AddDeviceForm = ({name, type, closePopUp}) => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [ deviceType, setDeviceType] = useState('')

  //Traemos el roomId empleando el hook de react-router-dom
  const roomId = useParams().slug
//   console.log("roomId en addDeviceForm: ", roomId)

  const deviceData = '';
  const status = "Off"

  //Esta función controla el estado del select dentro de formulario.
  const handleChange =(event)=>{
    setDeviceType (event.target.value)
  };

  const envioDispositivo = (async ({name, deviceType}) => {
        const res = await postNewDevice(name, deviceType, status, deviceData, roomId);
        closePopUp(false);
        // console.log('Estos son los datos que mandamos: ', res);
  });


return (
        <Box className= "popUpDevice">
            <Box className='popUpAddDevice' sx={{maxWidth:'500px', marginBottom:'2rem', paddingTop: '2rem', paddingBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', border:'solid 1px #EAEAEA', borderRadius:'1rem'}}>
                
                <Typography variant='h4' sx={{paddingBottom: '2rem'}}>Nuevo dispositivo:</Typography>

                <form onSubmit={handleSubmit(envioDispositivo)}> 

                    <Stack spacing={2} width={400}>
                    <TextField variant='filled' label='Name' type='name' {...register('name', {required: true})} />
                    
                    <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-required-label">Tipo de dispositivo</InputLabel>
                        <Select
                        labelId="demo-simple-select-standard-label"
                        label="Tipo de dispositivo *"
                        value={type}
                        onChange={handleChange}
                        
                        {...register('deviceType', {required: true})} 
                        >
                        {/* <MenuItem value="">
                            <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={'lightbulb'}>Bombilla</MenuItem>
                        <MenuItem value={'blinders'}>Persianas</MenuItem>
                        <MenuItem value={'temperature'}>Termostato</MenuItem>
                        <MenuItem value={'furniture'}>Mobiliario</MenuItem>
                        <MenuItem value={'other'}>Otro</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>           
                    </Stack>

                    <Box sx={{display: 'flex', flexDirection: 'row', gap:'1rem', justifyContent: 'center', paddingTop:'1rem'}}>
                        <Button type='cancel' variant='outlined' color='info' onClick={() => closePopUp(false)}>
                            Cancelar
                        </Button>
                        <Button type='submit' variant='contained' color='secondary'>
                            Añadir dispositivo
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
)
};

export default AddDeviceForm