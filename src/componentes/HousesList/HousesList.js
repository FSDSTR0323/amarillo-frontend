import React from 'react';
import './styles.css';
import { useState, useEffect } from 'react';
import { getAllHouses } from '../../apiService';
import { Link } from 'react-router-dom';

//MATERIAL UI
import { Grid, Card, Box, Stack } from '@mui/material';
import { CardActionArea, CardActions, IconButton, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

//OJO: aquí habría que importar el número de casas y si solo es 1, getAllRooms, y si son varias, pintar una web de varias casas

const HousesList = ( {refresh} ) => {
    const [ houses, setHouses ] = useState([]);
    console.log( houses );

    useEffect(() => {
        getAllHouses()
            .then( data => {
                console.log('Esta es la info del backend: ', data);
                setHouses(data)
             })
            .catch( error => console.error(error))
    }, [refresh]);
  
    return (
        <Grid container spacing={2}>
            { houses.length > 0 ? houses.map( house => {
                return (
                    <Grid item xs={12} md={12} key={house._id}>
                        
                        <Card sx={{ display:'flex', maxHeight:'270px', boxShadow: '4px 8px 8px -4px rgb(202, 213, 216)', border:'solid 1px #f2f2f2', borderRadius:'1rem'}}
                            onClick={()=> ''}
                            >

                            <Box sx={{display:'flex', flexDirection:'column'}}>
                            
                            {/* <CardActionArea> */}
                                <CardContent>
                                    <Link to='/housePanel'>
                                        <Typography gutterBottom variant="h5" component="div">
                                            { house.name }
                                        </Typography>
                                    </Link>
                                    <Typography gutterBottom variant="body1" sx={{color: '#A1A1A1'}} component="div">
                                        { house.address.street }, { house.address.number }
                                    </Typography>
                                    <Typography gutterBottom variant="body1" sx={{color: '#A1A1A1', fontSize:'0.8rem'}} component="div">
                                        { house.address.district }, { house.address.city  }
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{paddingTop:'1rem', fontSize:'1.1rem'}}>
                                        El número de estancias que tiene la vivienda son: { house.roomsNumber }
                                    </Typography>
                                </CardContent>
                            {/* </CardActionArea> */}

                            <CardActions>
                                <IconButton 
                                color='primary' 
                                onClick={() => console.log('Estas tratando de borrar esta vivienda.')
                                    }>
                                <DeleteIcon></DeleteIcon>
                                </IconButton>

                                {/* //TODO COMO PODEMOS HACER QUE EL POP UP APAREZCA INDIVIDUALMENTE EN CADA CARD???
                                { deletePopUp && <DeleteRoomPopUp closePopUp={toggleDeletePopUp}></DeleteRoomPopUp>} */}

                            </CardActions>
                            
                            </Box>
                            
                            <CardActionArea sx={{flexGrow:2}}>
                                <Link to='/housePanel'>
                                    {/* Aquí metemos la lógica que llame a las imágenes  */}
                                    <img src='https://images.unsplash.com/photo-1514895413746-feb3d266273d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                                    className='housePicture' />
                                </Link>
                            </CardActionArea>

                        </Card>
                    </Grid>
                )
            }) : null }
        </Grid> 
  )
};

export default HousesList;