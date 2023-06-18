import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './styles.css';

import { Typography, TextField, Button, Stack, Box } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { postNewRoom } from '../../../apiService';

//TO DO: COMPLETAR EL FORMULARIO DE UNA NUEVA ESTANCIA.
const AddRoomForm = ({name, type, closePopUp}) => {

    //Empleamos los hooks que nos ofrece useForm({default values: si queremos...})
    const { register, formState: { errors }, handleSubmit } = useForm();

    //Para poder cambiar el estado del select dentro del formulario de nuevas estancias.
    const [ roomType, setRoomType ] = useState('');
    
    const handleChange = () => {
        setRoomType(roomType.target.value)
    };

    // //Creamos la función onSubmit que recopile los datos al usar el botón submit.
    // const onSubmit = async ( roomData ) => {
    //     console.log(roomData);
    //     postRoom(roomData.name, roomData.type)
    // };

    // //Mandamos los datos al backend --- empleamos el hook UseEffect
    // useEffect(() => {
    //     postNewRoom()
    //         .then( data => {
    //             console.log('Esta es la data de mi nueva estancia: ', data);
    //             //Ahora tendríamos que llamar a las habitaciones incluyendo la nueva habitación. UseState. TO DO //
    //         })
    //         .catch(error => console.log('Algo ha ido mal: ', error))
    //     }
    // );

//Dentro del formulario, el type debe ser un SELECT entre los distintos tipos posibles de nuevas estancias.
return (
    <Box className='addRoomWall'>
        <Box className='popUpAddRoom' sx={{maxWidth:'500px', marginBottom:'2rem', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', border:'solid 1px #EAEAEA', borderRadius:'1rem'}}>
            {/* <Button onClick={() => closePopUp(false)}>X</Button> */}
            <Typography variant='h4' sx={{p: '2rem'}}>Nueva estancia:</Typography>

            <form onSubmit={handleSubmit( async (name, type) => {
                const res = await postNewRoom(name, type);
                console.log(res);
            })}> 
                <Stack spacing={2} width={400}>

                <TextField variant='filled' label='Name' type='name' {...register('name', {required: true})} />

                <Select
                    labelId="demo-simple-select-standard-label"
                    variant='filled'
                    value={type}
                    onChange={handleChange}
                    label='Type'
                    {...register('type', {required: true})} 
                    >
                    <MenuItem value="Tipo de estancia">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Kitchen'}>Cocina</MenuItem>
                    <MenuItem value={'Lounge'}>Lounge</MenuItem>
                    <MenuItem value={'Room'}>Habitación</MenuItem>
                    <MenuItem value={'Bathroom'}>Baño</MenuItem>
                    <MenuItem value={'Garden'}>Jardín</MenuItem>
                    <MenuItem value={'Dinning Room'}>Comedor</MenuItem>
                </Select>

                <Typography variant='body1' sx={{color:'#505050', paddingTop:'1rem'}}>Elige una imagen para tu estancia:</Typography>
                <input 
                    type='file' 
                    id='imgRoomForm' 
                    name='imgRoom' 
                    accept='image/jpg, image/jpeg, image/png' />

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