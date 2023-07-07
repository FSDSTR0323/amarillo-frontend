import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { postNewHouse } from '../../../apiService';
import { TextField, Stack, Select, MenuItem, FormControl, Box, InputLabel, FormHelperText, Button, IconButton, Typography} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

import './styles.css';


const AddHouseForm = () => {
  const { register, handleSubmit } = useForm();
  const [textFields, setTextFields] = useState([]);
  const [houseType, setHouseType] = useState('');
  const [roomsError, setRoomsError] = useState(false);
  const [metersError, setMetersError] = useState(false);

  const [ file, setFile ] = useState('');
  console.log('useState asset de ', file);
  const [ houseImg, setHouseImg ] = useState('');

  const navigate = useNavigate();

  const addTextFields = () => {
    setTextFields([
      ...textFields,
      { nombre: '', direccion: '', tamaño: '', fecha: '' },
    ]);
  };

  const handleChange = (event) => {
    setHouseType(event.target.value);
  };

  // const handleTextChange = (index, event) => {
  //   const { name, value } = event.target;
  //   const values = [...textFields];

  //   // Validar longitud máxima del campo "nombre"
  //   if (name === 'nombre' && value.length > 20) {
  //     return; // No permitir más caracteres si se alcanza la longitud máxima
  //   }
  //   values[index][name] = value;
  //   setTextFields(values);
  // };


//A partir de este punto quedaría la función para añadir una imagen a tu vivienda.------------------------------------
  const uploadImage = () => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'alvaro_preset1')

    axios.post('https://api.cloudinary.com/v1_1/dwuej2jjm/image/upload', formData)
    .then( response => {
      console.log('Esta es la url de la imagen que mandamos al backend: ', response.data.url)
      setHouseImg(response.data.url)
    })
    .catch( (err) => console.log(err))
  };


//--------------------------------------------------------------------------------
//FUNCIÓN PARA HACER SUBMIT DE TODOS LOS DATOS QUE PASAMOS EN EL FORMULARIO DE NUEVA VIVIENDA.
  const envioForm = ( async ({name, type, street, number, district, city, country, houseSize, roomsNumber}) => {
    console.log('Estos son los datos que mandamos de la nueva vivienda: ', name, type, street, number, district, city, country, houseSize, roomsNumber );
    const response = await postNewHouse(name, type, street, number, district, city, country, houseSize, roomsNumber);
    console.log('Estos son los datos que estamos pasando en el formulario: ', response);
  });



  return (
  
  <Box className='backgroundBox'>


      <Typography variant='h4' sx={{padding:'3rem', textAlign:'center', fontSize:'2rem', fontWeight:'800'}}>Registro de espacio virtual:</Typography>

      <Typography variant='body1' sx={{color:'#3E3E3E', fontSize:'1.2rem', textAlign:'center', paddingRight:'10rem', paddingLeft:'10rem'}}>Para poder continuar, necesitamos que registres los datos de tu espacio virtual. Esto creará una nueva vivienda en la base de datos de HomeHub.
      </Typography>

      <Typography variant='body1' sx={{color:'#3E3E3E', fontSize:'1.2rem', textAlign:'center', paddingTop:'1rem', paddingRight:'10rem', paddingLeft:'10rem'}}>Por favor rellena los campos del siguiente formulario.</Typography>
      


    <Box sx={{display:'flex', justifyContent:'center', paddingTop:'3rem', paddingBottom:'5rem'}}>
      <Box sx={{maxWidth:'600px', bgcolor:'#FEFEFE', padding:'2rem', boxShadow:'4px 8px 8px -4px rgb(202, 213, 216)', borderRadius:'1rem'}}>
      <form onSubmit={handleSubmit(envioForm)}>
        <Stack spacing={2} width={400}>
          <TextField
            variant="filled"
            label="Nombre de la vivienda/oficina/espacio"
            type="text"
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
              {...register('type', { required: true })}
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


          <Typography sx={{paddingTop:'2rem'}}>Dirección:</Typography>

          <Box sx={{display: 'flex', gap:'1rem'}}>
            <TextField
              variant="filled"
              label="Calle/Avenida/Carretera..."
              type="text"
              {...register('street', { required: true })}
              inputProps={{ maxLength: 30 }}
            />
            <TextField
              variant="filled"
              label="Número"
              type="number"
              {...register('number', { required: true })}
              inputProps={{ maxLength: 9 }}
            />
          </Box>

          <TextField
              variant="filled"
              label="Barrio/Distrito"
              type="text"
              {...register('district')}
              inputProps={{ maxLength: 30 }}
            />

          <TextField
              variant="filled"
              label="Ciudad"
              type="text"
              {...register('city', { required: true })}
              inputProps={{ maxLength: 30 }}
            />

          <TextField
              variant="filled"
              label="País"
              type="text"
              {...register('country')}
              inputProps={{ maxLength: 30 }}
            />


          <Typography sx={{paddingTop:'2rem'}}>Datos de la vivienda:</Typography>

          <TextField
            variant="filled"
            label="Metros cuadrados"
            type="number"
            {...register('houseSize', { min: { value: 1, message: 'Mínimo un metro cuadrado por vivienda.' } })}
            error={metersError}
            helperText={metersError && 'Mínimo un metro cuadrado por vivienda.'}
            inputProps={{ min: 0 }}
            onChange={(e) => setMetersError(e.target.value < 0)}
          />

          <TextField
            variant="filled"
            label="Número de habitaciones"
            type="number"
            {...register('roomsNumber', { min: { value: 1, message: 'Debe haber al menos una habitación.' } })}
            error={roomsError}
            helperText={roomsError && 'Debe haber al menos una habitación.'}
            inputProps={{ min: 0 }}
            onChange={(e) => setRoomsError(e.target.value === '0')}
          />


        <Typography sx={{paddingTop:'2rem'}}>Elige una imagen para tu nueva vivienda/oficina y súbela a la nube de HomeHub:</Typography>
        <Box sx={{display:'flex', gap:'1rem'}}>
                <Button
                    variant="info"
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
              <Button variant='contained'
                      color='success'
                      onClick={uploadImage}
                      startIcon={<SaveIcon/>}
                      sx={{}}></Button>
          </Box>

        </Stack>

        <Typography sx={{textAlign:'center', paddingTop:'1rem', color:'#AEAEAE'}}>___________</Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem', justifyContent: 'left', paddingTop: '2rem', paddingBottom: '1rem' }}>
          <Button type="cancel" variant="outlined" color="info" onClick={() => navigate('/myHouses')}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Registrar nueva vivienda
          </Button>
        </Box>
      </form>
      </Box>

    </Box>
  </Box>
  );
};

export default AddHouseForm;
