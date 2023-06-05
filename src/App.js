import './App.css';
import React from 'react';


//IMPORTANDO REACT ROUTER DOM --- ENRUTADO
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './componentes/containers/Homepage';

import HousePanel from './componentes/containers/HousePanel';
import RoomPanel from './componentes/containers/RoomPanel';
import RegisterForm from './componentes/forms/RegisterForm/index.tsx';
import MyHousesPanel from './componentes/containers/AllHousesPanel';
import Login from './componentes/containers/Login';

/* A partir de aquí vamos a crear nuestro tema.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4400',
      //light, dark, contrastText --- estos son los 4 parámetros dentro de palette-primary.
    }
  }
});
*/

function App() {
  return (
   
        <BrowserRouter>
          <Routes>
              <Route path='/homepage' element={<Homepage />} />
              <Route path='/housePanel' element={<HousePanel/>} />
              <Route path='/myHouses' element={<MyHousesPanel/>} />
              <Route path='/housePanel/:slug' element={<RoomPanel/>} />
              <Route path='/register' element={<RegisterForm/>} />
              <Route path='/login' element={<Login/>} />

              <Route path='*' element={<p>No hemos encontrado esta página.</p>} /> TODO: Hay que crear la página de 404 NotFound
          </Routes>    
        </BrowserRouter>
  );
}

export default App;
