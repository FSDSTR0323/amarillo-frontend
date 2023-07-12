import React, { useState } from 'react';
import HubNavBar from '../MenuBars/HubNavBar';
import { Typography, Box, Stack, Button, IconButton, Avatar, TextField, InputAdornment, MenuItem } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const MyUserPanel = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Nombre',
    surname: 'Apellidos',
    email: 'E-mail',
    phoneNumber: 'Número de teléfono',
    birthYear: 'Año de nacimiento',
    avatar: '',
  });
  const [editedUserData, setEditedUserData] = useState({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    birthYear: '',
    avatar: '',
  });

  const handleEditClick = () => {
    setEditedUserData(userData);
    setEditMode(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setEditedUserData((prevData) => ({
      ...prevData,
      avatar: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData(editedUserData);
    setEditMode(false);
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
                    src={editedUserData.avatar ? URL.createObjectURL(editedUserData.avatar) : ''}
                    sx={{ width: 80, height: 80 }}
                  />
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
                    Añadir foto
                  </Box>
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
                    value={editedUserData.name}
                    onChange={handleInputChange}
                    InputProps={{
                      style: { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                    }}
                  />
                  <TextField
                    label="Apellido/Surname"
                    variant="filled"
                    fullWidth
                    name="surname"
                    value={editedUserData.surname}
                    onChange={handleInputChange}
                    InputProps={{
                      style: { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                    }}
                  />
                  <TextField
                    label="Email"
                    variant="filled"
                    fullWidth
                    name="email"
                    value={editedUserData.email}
                    onChange={handleInputChange}
                    InputProps={{
                      style: { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
                    }}
                  />
                  <PhoneInput
                    label="Teléfono de contacto"
                    variant="filled"
                    fullWidth
                    name="phoneNumber"
                    value={editedUserData.phoneNumber}
                    onChange={(phone) => setEditedUserData({ ...editedUserData, phoneNumber: phone })}
                    inputStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
                    country={'es'}
                    disableDropdown
                    inputProps={{
                      maxLength: 15,
                    }}
                  />
                  <TextField
                    label="Año de nacimiento/Birth year"
                    variant="filled"
                    fullWidth
                    name="birthYear"
                    value={editedUserData.birthYear}
                    onChange={handleInputChange}
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
                    <Button type="submit" variant="contained" color="primary">
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
                  <Typography>{userData.surname}</Typography>
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
