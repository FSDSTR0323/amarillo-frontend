import React, { useEffect, useState } from 'react';
import HubNavBar from '../MenuBars/HubNavBar';
import { Typography, Box, Stack, Button, Avatar, TextField } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import SaveIcon from '@mui/icons-material/Save'; 
import { addEditUser, dataUser } from '../../apiService';
import { Refresh } from '@mui/icons-material';


const MyUserPanel = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({});
  const [cambioForm, setCambioForm] = useState(false);
  useEffect(() => {
    dataUser()
    .then(userData => {
      setUserData(userData)
      console.log("UserData: ", userData )
    })
  },[cambioForm, Refresh])
  
  const envioForm = async (userData) =>{
    console.log("Formulario: ", userData)
    const resultado = await addEditUser(userData)
    console.log("Resultado del envío Formulario: ", resultado)
    setUserData(resultado)
    setCambioForm(true);

  }


  const handleEditClick = () => {
    setUserData(userData);
    setEditMode(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      avatar: file,
    }));
  };

  const uploadImage = (event) => {
    event.preventDefault();

    setUserData((prevData) => ({
      ...prevData,
      avatar: editedUserData.avatar,
    }));
    setEditMode(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUserData((prevData) => ({
      ...prevData,
      name: userData.name,
      lastName: userData.lastName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      birthYear: userData.birthYear,
    }));
    setEditMode(false);

    // const handleSaveChanges = async () => {
    //   try {
    //     const response = await fetch(`/editar-usuario/${userData._id}`, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(userData),
    //     });
    
    //     if (response.ok) {
    //       console.log('Datos actualizados correctamente');
    //       // Puedes realizar alguna acción adicional después de actualizar los datos, como mostrar un mensaje de éxito o redirigir al usuario a otra página.
    //     } else {
    //       console.error('Error al actualizar los datos');
    //     }
    //   } catch (error) {
    //     console.error('Error al realizar la solicitud:', error);
    //   }
    // }
  };

  return (
    <>
      <HubNavBar />
      <Box sx={{ bgcolor: '#EAEAEA', height: '100vh' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box sx={{ marginTop: '2rem', padding: '2rem', width: '650px', justifyContent: 'center' }}>
            <Typography variant="h4">Perfil de usuario</Typography>
            <Typography variant="body1" sx={{ paddingTop: '1rem' }}>
              En esta sección puedes introducir tus datos como usuario de HomeHub y editarlos en cualquier momento.
              ¡Mantén tus datos bien actualizados para que desde Homehub podamos facilitarte un soporte de calidad!
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              margin: '1rem',
              padding: '2rem',
              bgcolor: 'white',
              border: 'solid 1px #EAEAEA',
              borderRadius: '1rem',
              width: '600px',
              boxShadow: '4px 8px 8px -4px rgb(202, 213, 216)',
            }}
          >
            <Stack spacing={2} width={600}>
              <label htmlFor="avatar-input">
                <Box sx={{ position: 'relative' }}>
                  <Avatar
                    alt="HomeHub Avatar"
                    src={userData.avatar ? URL.createObjectURL(userData.avatar) : ''}
                    sx={{ width: 80, height: 80 }}
                  />
                   <Typography variant='body1' sx={{color:'#505050', paddingTop:'1rem'}}>Elige una imagen para tu perfil:</Typography>

<Box sx={{display:'flex', gap:'1rem'}}>
    <Button
        variant="info"
        component="label"
        >
        Seleccionar una imagen de perfil
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

<Typography sx={{textAlign:'center', paddingTop:'1rem', color:'#AEAEAE'}}>___________</Typography>

<Box sx={{display: 'flex', flexDirection: 'row', gap:'1rem', justifyContent: 'center', paddingTop:'1rem', paddingBottom:'1rem'}}>
    <Button type='cancel' variant='outlined' color='info' onClick={() => closePopUp(false)}>
        Cancelar
    </Button>
    <Button type='submit' value ="" variant='contained' color='primary'>
        Actualizar datos de usuario
    </Button>
</Box>
</Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.6)',
                      color: 'white',
                      fontSize: '10px',
                      padding: '2px',
                    }}
                  >
                  </Box>
      
                <input
                  id="avatar-input"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileInputChange}
                />
              </label>

              {editMode ? (
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Nombre/Name"
                    variant="filled"
                    fullWidth
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    placeholder="Introduce tu nombre"
                    InputProps={{
                      style: { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                    }}
                  />
                  <TextField
                    label="Apellido/lastName"
                    variant="filled"
                    fullWidth
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleInputChange}
                    placeholder="Introduce tu apellido"
                    InputProps={{
                      style: { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                    }}
                  />
                  <TextField
                    label="Email"
                    variant="filled"
                    fullWidth
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    placeholder="Introduce tu e-mail"
                    InputProps={{
                      style: { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                    }}
                  />
                  <PhoneInput
                    label="Teléfono de contacto"
                    variant="filled"
                    fullWidth
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    onChange={(phone) => setUserData({ ...userData, phoneNumber: phone })}
                    placeholder="Introduce tu número de teléfono"
                    inputStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                    countryCodeEditable
                    country={'auto'}
                    disableDropdown={false}
                    dropdownClass="react-phone-input-2-dropdown"
                    inputProps={{
                      maxLength: 15,
                    }}
                  />
                  <TextField
                    label="Año de nacimiento/BirthYear"
                    variant="filled"
                    fullWidth
                    name="birthYear"
                    value={userData.birthYear}
                    onChange={handleInputChange}
                    placeholder="Introduce tu año de nacimiento"
                    InputProps={{
                      style: { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                    }}
                  />

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '1rem',
                      justifyContent: 'center',
                      paddingTop: '2rem',
                      paddingBottom: '1rem',
                    }}
                  >
                    <Button type="submit" variant="contained" color="primary" onClick={() => {setEditMode(false),envioForm(userData)}}>
                      Guardar
                    </Button>
                    <Button variant="outlined" color="info" onClick={() => setEditMode(false)}>
                      Cancelar
                    </Button>
                  </Box>
                </form>
              ) : (
                <>
                  <Typography>{userData.name}</Typography>
                  <Typography>{userData.lastName}</Typography>
                  <Typography>{userData.email}</Typography>
                  <Typography>{userData.phoneNumber}</Typography>
                  <Typography>{userData.birthYear}</Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '1rem',
                      justifyContent: 'center',
                      paddingTop: '2rem',
                      paddingBottom: '1rem',
                    }}
                  >
                    <Button variant="outlined" color="info" onClick={handleEditClick}>
                      Editar mis datos
                    </Button>
                  </Box>
                </>
              )}
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyUserPanel;