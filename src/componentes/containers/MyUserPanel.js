import React, { useEffect, useState } from 'react';
import HubNavBar from '../MenuBars/HubNavBar';
import { Typography, Box, Stack, Button, Avatar, TextField } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import SaveIcon from '@mui/icons-material/Save'; 
import { dataUser } from '../../apiService';
import {useForm} from 'react-hook-form'



const MyUserPanel = ({name, surname, birthYear, phoneNumber, email}) => {
  const {register, formState:{errors}, handleSubmit} = useForm()
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    // name: '',
    // surname: '',
    // email: '',
    // phoneNumber: '',
    // birthYear: '',
    // avatar: '',
  });

  const [editedUserData, setEditedUserData] = useState({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    birthYear: '',
    avatar: '',
  });
  const [file, setFile] = useState(null);

  useEffect(() => {

    dataUser()
    .then(userData => {
      setUserData(userData)
      console.log("UserData: ", userData )
    })
  },[])

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

  const uploadImage = (event) => {
    event.preventDefault();

    setUserData((prevData) => ({
      ...prevData,
      avatar: editedUserData.avatar,
    }));
    setEditMode(false);
  };

  // const handleSubmit = (event) => {
  //   //event.preventDefault();

  //   setUserData((prevData) => ({
  //     ...prevData,
  //     name: editedUserData.name,
  //     surname: editedUserData.surname,
  //     email: editedUserData.email,
  //     phoneNumber: editedUserData.phoneNumber,
  //     birthYear: editedUserData.birthYear,
  //   }));
  //   setEditMode(false);
  // }

    // const handleSaveChanges = async () => {
    //   try {
    //     const response = await fetch(`/editar-usuario/${userData._id}`, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(editedUserData),
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
  

  const envioForm = async ({name, surname, email, phoneNumber, birthYear}) =>{
    console.log("Formulario: ", {name, surname, email, phoneNumber, birthYear})
    const resultado = await addEditUser(name, surname, email, phoneNumber, birthYear, avatar)
    console.log("Resultado del envío Formulario: ", resultado)
  }

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
          {
            {userData}?
              <Box>
                <Typography>
                {userData.name}
                </Typography>
                <Typography>
                {userData.email} 
                </Typography>
              </Box> 
            :null           
          }
          //imprimir el formulario q es copiar la info que tenemos en add room form q nos manda una nueva hab. copiarla aqui y cuando se manda al backend volver a recibir la info de estos datos q estamos pintando. 
            
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MyUserPanel;