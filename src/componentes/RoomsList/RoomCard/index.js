//Esta va a ser nuestra ficha de cad estancia-room. 
import React, { useState, useEffect } from "react";
import './styles.css';
import DeleteRoomPopUp from './DeleteRoomPopUp';
import { Link } from 'react-router-dom';
import { getAllRooms } from "../../../apiService";

//Elementos de material ui 
import { Grid, CardActionArea, CardActions, IconButton, Card, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//DEJO COMENTADO EL COMPONENTE DE ROOM CARD

// const RoomCard = ({name, type, devices, refresh}) => {

//     const [ rooms, setRooms ] = useState('');
//     const [ deletePopUp, toggleDeletePopUp ] = useState(false);

//     useEffect(() => {
//         getAllRooms()
//             .then( data => {
//                 console.log('Esta es la info del backend: ', data);
//                 setRooms(data)
//              })
//             .catch( error => console.error(error))
//     }, [refresh]);

//   return(
//     <>
//     { rooms.length > 0 ? rooms.map( room => {
//       return (
//           <Grid item xs={12} sm={6} md={3} key={room._id}>
//               <Card sx={{ boxShadow: '4px 8px 8px -4px rgb(202, 213, 216)'}}>

//                   <CardActionArea onClick={ ()=> <Link to={`/housePanel/${room._id}`} /> }>
//                       { rooms.length > 0 ? rooms.map( room => {
//                           switch (room.roomType) {
//                               case 'Kitchen':
//                                   <img src='https://res.cloudinary.com/dwuej2jjm/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1687442485/homehub/kitchen2_yufu0a.jpg' alt='Kitchen/Cocina'/>
//                                   break;
//                               case 'Lounge':
//                                   <img src='https://res.cloudinary.com/dwuej2jjm/image/upload/v1687534855/homehub/livingRoom3_epxa8z.jpg' alt='Lounge/Salón'/>
//                                   break;
//                               case 'Room':
//                                   <img src='https://res-console.cloudinary.com/dwuej2jjm/thumbnails/v1/image/upload/v1687535056/ZGVmYXVsdFJvb21fenNtYW16/drilldown' alt='Lounge/Salón'/>
//                                   break;
//                               case 'Bathroom':
//                                   <img src='' alt='Lounge/Salón'/>
//                                   break;
//                               case 'Garden':
//                                   console.log('')
//                                   break;
//                               case 'Dinning Room':
//                                   console.log('')
//                                   break;
//                               default:
//                                   <img src='https://res.cloudinary.com/dwuej2jjm/image/upload/v1687535056/defaultRoom_zsmamz.jpg' alt='Default'/>
//                           }
//                       }) : null }
                      
//                       <CardContent>
//                           <Typography gutterBottom variant="h5" component="div">
//                               { room.name }
//                           </Typography>
//                           <Typography gutterBottom variant="body1" sx={{color: '#A1A1A1'}} component="div">
//                               { room.roomType }
//                           </Typography>
//                           <Typography variant="body2" color="text.secondary">
//                               Los dispositivos conectados en esta estancia son: { room.devices }
//                           </Typography>
//                       </CardContent>
//                   </CardActionArea>

//                   <CardActions>
//                       <IconButton 
//                       color='primary' 
//                       onClick={() => toggleDeletePopUp(true) }>
//                       <DeleteIcon></DeleteIcon>
//                       </IconButton>
//                       { deletePopUp && <DeleteRoomPopUp closePopUp={toggleDeletePopUp}></DeleteRoomPopUp>}
//                   </CardActions>
//               </Card>
//           </Grid>
//       )
//   }) : null }
//   </>
//   )
// };

// export default RoomCard




