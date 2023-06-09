//Esta va a ser nuestra ficha de cad estancia-room. 
import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';


export default function DeviceCard({ name }) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardActionArea>
        {/* 
          El código de acontinuación nos permitiría incorporar una imagen a cada card 
          TO DO: Plantear la llamada a un banco de imagenes para cada habitación. 
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          { name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Texto prueba
          </Typography>
        </CardContent>

      </CardActionArea>
      <CardActions>

        {/* <IconButton>
          <CreateIcon></CreateIcon>
        </IconButton> */}

        <IconButton color='primary'>
          <DeleteIcon></DeleteIcon>
        </IconButton>

      </CardActions>
    </Card>
  );
}





/*El propósito de este componente es simplemente pintar la DeviceCard.
const DeviceCard = ({ name }) => {
    return (
    <Card sx={{m: '2rem'}}>
        <Typography variant='h6'>{ name }</Typography>
        <DeleteIcon />
    </Card>
  )
};
*/



