//Esta va a ser nuestra ficha de cad estancia-room. 
import React, { useState } from "react";
import './styles.css';
import DeleteRoomPopUp from './DeleteRoomPopUp';

//Elementos de material ui 
import { Button, CardActionArea, CardActions, IconButton, Card, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//Importamos las imágenes de la carpeta de assets.
import bedroom from '../../../assets/imgs/bedroom1.jpg'


export default function RoomCard({ name, type, devices }) {

  const [ deletePopUp, toggleDeletePopUp ] = useState(false)

  return (
  <>
    <Card sx={{ maxWidth: 345, boxShadow: '4px 8px 8px -4px rgb(202, 213, 216)'}}>
      <CardActionArea>
        
        <img className='cardImage' src={bedroom} alt='bedroom' />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          { name }
          </Typography>
          <Typography gutterBottom variant="body1" sx={{color: '#EAEAEA'}} component="div">
            { type }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Los dispositivos conectados en esta estancia son: { devices }
          </Typography>
        </CardContent>

      </CardActionArea>
      <CardActions>
        <IconButton 
        color='primary' >
          <DeleteIcon onClick={() => toggleDeletePopUp(true) }></DeleteIcon>
        </IconButton>
        { deletePopUp && <DeleteRoomPopUp closePopUp={toggleDeletePopUp}></DeleteRoomPopUp>}
      </CardActions>
    </Card>
   </>
  );
}




