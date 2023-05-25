import React from 'react';
import { Button, IconButton } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

//Dentro de este componente, generamos el pop-up que nos permita añadir una nueva estancia a nuestro panel/hub.

const AddRoom = () => {
  return (
    <IconButton>
      <AddBoxOutlinedIcon fontsize='large' color='primary'></AddBoxOutlinedIcon>
    </IconButton>
  )
}

export default AddRoom ;