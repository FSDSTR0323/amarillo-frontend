// import React, { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';
// import { Box, Stack, IconButton, Button, Typography, TextField, } from '@mui/material';

//const socket = io('http://localhost:9000');

// const SupportChat = () => {

//     //Creamos los distintos estados que existirán dentro del chat 
//     const [ isConnected, setIsConnected ] = useState(false);
//     const [ nuevoMensaje, setNuevoMensaje ] = useState('');
//     const [ mensajes, setMensajes ] = useState([]);

//     //Usamos useEffect para suscribirnos a los diferentes eventos que van a suceder en el servidor
//     useEffect(()=>{
//         socket.on('connect', ()=> {setIsConnected(true)})

//         socket.on('chat_message', (data) => {
//             setMensajes( mensajes => [...mensajes, data])
//         })

//         return() => {
//             socket.off('connect');
//             socket.off('chat_message')
//         }
//     }, [])

//     const enviarMensaje = () => {
//         socket.emit('chat_message', {
//             user: socket.id, 
//             text: nuevoMensaje
//         })
//     };

//   return (
//    <Box className='container' sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',  bgcolor:'#EAEAEA', minHeight:'100vh'}}>

//     <Typography variant='h4'>Soporte de HomeHub:</Typography>
//     <Typography variant='body1' sx={{marginTop:'2rem'}}>Un agente se pondrá en contacto para resolver sus dudas enseguida.</Typography>
    
//     <Box className='mensajes' sx={{bgcolor:'white', minHeight:'50vh', minWidth:'450px', m:'2rem', border:'1px solid #FAFAFA', borderRadius:'1rem'}}>
//         <Typography variant='h6' sx={{m:'1rem', p:'0.5rem', bgcolor:'#8EFFE2', fontSize:'0.8rem', color:'#2A4C43', textAlign:'center', borderRadius:'2rem'}}>
//             { isConnected ? 'Estás conectado' : 'No estás conectado'}
//         </Typography>
//         { mensajes.map( mensaje => {
//             <Typography variant='body1'>{mensaje.user} - {mensaje.texto} </Typography>
//         })}
//         {/* AQUÍ METERÍAMOS NUESTRO <TYPOGRAPHY></TYPOGRAPHY>> DE CADA UNO DE LOS MENSAJE ITERANDOLOS */}

//     </Box>

//     <Box className='myTextInput' sx={{display: 'flex', bgcolor:'white', minWidth:'450px', border:'1px solid #FAFAFA', borderRadius:'1rem'}}>
//         <TextField 
//             sx={{flexGrow:'2', m:'1rem 0rem 1rem 1rem'}}
//             type='text'
//             onChange={e=> setNuevoMensaje(e.target.value)}>
//         </TextField>
//         <Button 
//             variant='contained' 
//             sx={{m:'1rem'}}
//             onClick={enviarMensaje}>
//             Enviar
//         </Button>
//     </Box>
   
//    </Box>
//   )
// };

// export default SupportChat