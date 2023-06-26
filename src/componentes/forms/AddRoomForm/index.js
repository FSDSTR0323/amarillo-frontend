import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
//import {Cloudinary} from '@cloudinary/url-gen';
import axios from 'axios';
import './styles.css';

import { Typography, TextField, Button, Stack, Box, InputLabel, FormControl, FormHelperText } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { postNewRoom } from '../../../apiService';


//TO DO: COMPLETAR EL FORMULARIO DE UNA NUEVA ESTANCIA.
const AddRoomForm = ({name, type, closePopUp}) => {

    //Empleamos los hooks que nos ofrece useForm({default values: si queremos...})
    const { register, formState: { errors }, handleSubmit } = useForm();

    //Para poder cambiar el estado del select dentro del formulario de nuevas estancias.
    const [ roomType, setRoomType ] = useState('');
    const [ file, setFile ] = useState('');
    const [ url, setUrl ] = useState('');

    console.log('useState asset de ', file);
    
    const handleChange = (event) => {
        setRoomType(event.target.value)
    };

    const handleFile = (event) => {
        setFile(event.target.value)
    }

    const mediaType = 'image';
    //La función de upload nos va a hacer un POST a la url de Cloudinary
    const upload = archivo => {

        const data = new FormData();
        data.append('file', archivo)
        data.append('upload_preset', 'alvaro_preset1') //Me falta el upload preset
        data.append('cloud_name', 'dwuej2jjm')

        fetch(`https://api.cloudinary.com/v1_1/dwuej2jjm/${mediaType}/upload`, {
            method: 'post',
            body: data
        })
        .then(res => res.json())
        .then(data => {
            console.log('url: ', data)
            setUrl(prev => prev.concat(data.url))
        })
        .catch(error => console.log(error))
    };


//Dentro del formulario, el type debe ser un SELECT entre los distintos tipos posibles de nuevas estancias.
return (
    <Box className='addRoomWall'>
        <Box className='popUpAddRoom' sx={{maxWidth:'500px', marginBottom:'2rem', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', border:'solid 1px #EAEAEA', borderRadius:'1rem'}}>
            {/* <Button onClick={() => closePopUp(false)}>X</Button> */}
            <Typography variant='h4' sx={{p: '2rem'}}>Nueva estancia:</Typography>

            <form onSubmit={handleSubmit( async (name, type, image) => {
                const res = await postNewRoom(name, type, image);
                closePopUp(false);
                console.log('Estos son los datos que estamos pasando en el formulario: ', res);
            })}> 
                <Stack spacing={2} width={400}>

                <TextField variant='outlined' label='Name' type='name' value={name} {...register('name', {required: true})} />

                <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-required-label">Tipo de estancia</InputLabel>
                        <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        label="Tipo de estancia *"
                        onChange={handleChange}
                        {...register('type', {required: true})}
                        >
                        <MenuItem value="Kitchen">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'Kitchen'}>Cocina</MenuItem>
                        <MenuItem value={'Lounge'}>Salón</MenuItem>
                        <MenuItem value={'Room'}>Habitación</MenuItem>
                        <MenuItem value={'Bathroom'}>Baño</MenuItem>
                        <MenuItem value={'Office'}>Oficina</MenuItem>
                        <MenuItem value={'Garden'}>Jardín</MenuItem>
                        <MenuItem value={'Dinning Room'}>Comedor</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>

                <Typography variant='body1' sx={{color:'#505050', paddingTop:'1rem'}}>Elige una imagen para tu estancia:</Typography>
                <Button
                    variant="contained"
                    component="label"
                    >
                    Seleccionar una imagen
                        <input
                            type="file"
                            hidden
                            onChange={handleFile}
                        />
                </Button>

                </Stack>
                <Box sx={{display: 'flex', flexDirection: 'row', gap:'1rem', justifyContent: 'center', paddingTop:'2rem', paddingBottom:'1rem'}}>
                    <Button type='cancel' variant='outlined' color='info' onClick={() => closePopUp(false)}>
                        Cancelar
                    </Button>
                    <Button type='submit' variant='contained' color='primary'>
                        Crear nueva estancia
                    </Button>
                </Box>
            </form>
        </Box>
  </Box>
)
};

export default AddRoomForm 