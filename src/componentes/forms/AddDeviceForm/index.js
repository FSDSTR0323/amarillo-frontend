import React,{ useEffect,useState } from 'react';
import {useForm} from 'react-hook-form'; 
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Typography, TextField, Button, Stack, Box } from '@mui/material'; 
import { postNewDevice } from '../../../apiService';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

//Dentro de este componente, generamos el pop-up que nos permita añadir un nuevo dispositivo a nuestra estancia
const AddDeviceForm = ({name, type, closePopUp}) => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [ deviceType, setDeviceType] = useState("")
  
  //Esta función controla el estado del select dentro de formulario.
  const handleChange =(event)=>{
    setDeviceType (event.target.value)
  }

  //Mandamos los datos al backend --- empleamos el hook UseEffect --- TODO: PASAR A LA API-SERVICE
  useEffect(() => {
    postNewDevice()
        .then( data => {
            console.log('Esta son los datos de mi nuevo dispositivo: ', data);
            //Ahora tendríamos que llamar a las habitaciones incluyendo la nueva habitación. UseState. TO DO //
        })
        .catch(error => console.log('Algo ha ido mal: ', error))
    }
);

  //Dentro del formulario, el type debe ser un SELECT entre los distintos tipos posibles de nuevos dispositivos.
return (
        <Box className= "popUpDevice">
            <Box sx={{ margin:'2rem', padding: '1rem', display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center', border:'solid 1px', borderRadius:'1rem'}}>
                <Button onClick={() => closePopUp(false)}>X</Button>
                <Typography variant='h4' sx={{paddingBottom: '2rem'}}>Nuevo dispositivo:</Typography>


                {/* Introduzco la función onSubmit dentro del handleSubmit que nos da hookforms. */}
                <form onSubmit={handleSubmit( async (name, type, data) => {
                    const res = await postNewDevice(name, type, data)
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
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'LightBulb'}>Bombilla</MenuItem>
                        <MenuItem value={'Blinders'}>Persianas</MenuItem>
                        <MenuItem value={'Temperature'}>Termostato</MenuItem>
                        <MenuItem value={'Furniture'}>Mobiliario</MenuItem>
                        
                    </Select>                
                    </Stack>
                    <Box sx={{display: 'flex', flexDirection: 'row', gap:'1rem', justifyContent: 'center', paddingTop:'1rem'}}>
                        <Button type='cancel' variant='outlined' color='info' onClick={() => closePopUp(false)}>
                            Cancelar
                        </Button>
                        <Button type='submit' variant='contained' color='primary'>
                            Añadir dispositivo
                        </Button>
                    </Box>
                </form>
            </Box>
        </Box>
)
};

export default AddDeviceForm