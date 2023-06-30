import React from 'react';
import './styles.css';
import { Typography, Box, IconButton, Container, Grid } from '@mui/material';
import logoBlack from '../../assets/logos/logo150black.jpg'

import { Instagram, Twitter, Facebook } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Footer = () =>{
    return (
        <Box
          component="footer"
          sx={{
            // backgroundColor: (theme) =>
            //   theme.palette.mode === "light"
            //     ? theme.palette.grey[200]
            //     : theme.palette.grey[800],
            p: 6,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>

              <Grid item xs={12} sm={4}>
                <img className='logoFooter' src={logoBlack} alt='HomeHubLogo' />
                <Typography variant="body2" color="text.secondary">
                  Simplifica y conecta tu día a día.
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Contacta con nosotros 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  123 Cualquier parte, España 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: info@homehub.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Phone: +1 234 567 8901
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="text.primary" gutterBottom>
                  Síguenos en redes
                </Typography>
                <Link href="https://www.facebook.com/" >
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  color="primary"
                  sx={{ pl: 2, pr: 2 }}
                >
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="primary">
                  <Twitter />
                </Link>
              </Grid>

            </Grid>

            <Box mt={5}>
              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://your-website.com/">
                  Homehub
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Container>
        </Box>
      );
};

export default Footer