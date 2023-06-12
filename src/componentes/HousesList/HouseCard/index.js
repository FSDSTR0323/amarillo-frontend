//esto es similar a roomCard, pero tengo que incluir que los datos me los envie al backend, a mongoose y me los actualice en el front. 
import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';


export default function HouseCard({ name }) {
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
              Los dispositivos conectados en esta estancia son:
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