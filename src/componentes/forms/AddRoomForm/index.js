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

    //Para poder hacer un upload de la imagen
    const [ file, setFile ] = useState('');
    console.log('useState asset de ', file);

    //Dani --- Cloudinary --- metemos la data.url en el estado de url
    const [ url, setUrl ] = useState('');
    const [ roomImg, setRoomImg ] = useState('');
    console.log('esto es roomImg: ', roomImg);
    const [ houseID, setHouseID ] = useState('');
    

    const handleHouse = (event) => {
        setHouseID(event.target.value)
    };

    const handleChange = (event) => {
        setRoomType(event.target.value)
    };

    //La función de upload nos va a hacer un POST a la url de Cloudinary


    //Queremos poder acceder a formData.data.url
    const uploadImage = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'alvaro_preset1')

        axios.post('https://api.cloudinary.com/v1_1/dwuej2jjm/image/upload', formData)
        .then( (response) => {
            console.log('este es la response al que quiero acceder: ', response)
            console.log('esta es la url que yo necesito mandar al backend: ', response.data.url);
            setRoomImg(response.data.url)
        })
        .catch( (err) => console.log(err))
    };

    const envioForm = ( async ( {name, type} ) => {
        console.log('esto es roomImg: ', {name, type, roomImg});

        const res = await postNewRoom(name, type, roomImg);
        closePopUp(false);
        console.log('Estos son los datos que estamos pasando en el formulario: ', res);
    });


//Dentro del formulario, el type debe ser un SELECT entre los distintos tipos posibles de nuevas estancias.
return (
    <Box className='addRoomWall'>
        <Box className='popUpAddRoom' sx={{maxWidth:'500px', marginBottom:'2rem', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', border:'solid 1px #EAEAEA', borderRadius:'1rem'}}>
            {/* <Button onClick={() => closePopUp(false)}>X</Button> */}
            <Typography variant='h4' sx={{p: '2rem'}}>Nueva estancia:</Typography>

            <form onSubmit={handleSubmit(envioForm)}> 
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
                        <MenuItem value="Default">
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
                            onChange={(event) => {
                                setFile(event.target.files[0])
                            }}
                        />
                </Button>
                <Button onClick={uploadImage}>Subir imagen</Button>

                </Stack>
                <Box sx={{display: 'flex', flexDirection: 'row', gap:'1rem', justifyContent: 'center', paddingTop:'2rem', paddingBottom:'1rem'}}>
                    <Button type='cancel' variant='outlined' color='info' onClick={() => closePopUp(false)}>
                        Cancelar
                    </Button>
                    <Button type='submit' value ="" variant='contained' color='primary'>
                        Crear nueva estancia
                    </Button>
                </Box>
            </form>
        </Box>
  </Box>
)
};

export default AddRoomForm 