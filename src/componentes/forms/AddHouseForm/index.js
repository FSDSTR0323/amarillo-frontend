import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postNewHouse } from '../../../apiService';
import { TextField, Stack, Select, MenuItem, FormControl, Box, InputLabel, FormHelperText,Button } from '@mui/material';

const AddHouseForm = () => {
  const { register, handleSubmit } = useForm();
  const [textFields, setTextFields] = useState([]);
  const [houseType, setHouseType] = useState ('');
  const [roomsError, setRoomsError] = useState(false);
  

const addTextFields = () => {
    setTextFields([
      ...textFields,
      { nombre: '', direccion: '', tamaño: '', fecha: '' },
    ]);
  };


const handleChange = (event) => {
    setHouseType(event.target.value)
}
  const handleTextChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...textFields];

    // Validar longitud máxima del campo "nombre"
    if (name === 'nombre' && value.length > 20) {
      return; // No permitir más caracteres si se alcanza la longitud máxima
    }

    values[index][name] = value;
    setTextFields(values);
  };
//meter todos los cmapos que tiene el formulario en la funcion onsubmit linea 37, de la misma forma q estan en el back., ademas tb tengo que añadir la funcion upload. (todo esto es paraa cuando le de al boton, me lleve a la sig pantalla.)
  const onSubmit = async (data) => {
    const { name, type } = data;
    const res = await postNewHouse(name, type);
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} width={400}>
        <TextField
          variant='filled'
          label='Asignar nombre a vivienda'
          type= "text"
          {...register('name', { required: true })}
           inputProps={{ maxLength: 30 }}
        />
        
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">Tipo de vivienda</InputLabel>
          <Select
              
                labelId="demo-simple-select-required-label"
                id="demo-simple-select-required"
                label="Tipo de vivienda *"
                onChange={handleChange}
                {...register('type', {required: true})}
                  >
            <MenuItem value="House">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={'House'}>Casa</MenuItem>
                  <MenuItem value={'Farmhouse'}>Cortijo</MenuItem>
                  <MenuItem value={'Apartment'}>Apartamento</MenuItem>
                  <MenuItem value={'Office'}>Oficina</MenuItem>
                  <MenuItem value={'Chalet'}>Chalet</MenuItem>
        </Select>
           <FormHelperText>Required</FormHelperText>
          {/* Opciones del Select */}
      </FormControl>

      <TextField
          variant='filled'
          label='Dirección'
          type= 'adress'
          {...register('adress', { required: true})}
           inputProps={{ maxLength: 30 }}
        />
         
      <TextField
          variant='filled'
          label= 'Metros cuadrados'
          type='number'
          {...register('metrosCuadrados')}
          inputProps={{ min: 0 }}
        />

      <TextField
          variant='filled'
          label='Número de habitaciones'
          type='roomsNumber'
          {...register('roomsNumber', { min: { value: 1, message: 'Debe haber al menos una habitación.' } })}
          error={roomsError}
          helperText={roomsError && 'Debe haber al menos una habitación.'}
          inputProps={{ min: 0 }}
          onChange={(e) => setRoomsError(e.target.value === '0')}
      />

      </Stack>

      <Box sx={{display: 'flex', flexDirection: 'row', gap:'1rem', justifyContent: 'left', paddingTop:'2rem', paddingBottom:'1rem'}}>
                    <Button type='cancel' variant='outlined' color='info' onClick={() => closePopUp(false)}>
                        Cancelar
                    </Button>
                    <Button type='submit' variant='contained' color='primary'>
                        Crear nueva vivienda
                    </Button>
                </Box>  
    </form>
  );
};

export default AddHouseForm;
