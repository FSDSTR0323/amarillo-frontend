import React from 'react';
import { Button, IconButton } from '@mui/material';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

//Dentro de este componente, generamos el pop-up que nos permita añadir un nuevo dispositivo a nuestra estancia

const AddDevice = () => {
  return (
    <IconButton>
      <AddBoxOutlinedIcon fontsize='large' color='primary'></AddBoxOutlinedIcon>
    </IconButton>
  )
}

export default AddDevice ;