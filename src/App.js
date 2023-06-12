import './App.css';
import React from 'react';
import './App.css';

//IMPORTANDO REACT ROUTER DOM --- ENRUTADO
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Pages
import Homepage from './componentes/containers/Homepage';               //Landing page HOMEHUB360
import RegisterForm from './componentes/forms/RegisterForm/index.tsx';   
import Login from './componentes/containers/Login';                     //Ir a mi panel
import MyHousesPanel from './componentes/containers/AllHousesPanel';    

import HousePanel from './componentes/containers/HousePanel';
import RoomPanel from './componentes/containers/RoomPanel';

/*Estructura:

  App ->componentes ->containers
                    ->forms
      ->apiService: llamadas al back
      ->assets: imágenes

  Cada container es una página a renderizar para cada una de las pantallas que queremos mostrar


*/
// ver artículo https://www.escuelafrontend.com/react-router-6
//BrowserRouter:poder declarar rutas individuales dentro de nuestra aplicación.
//Route: rutas dentro del componente BrowserRouter como secundarias.


function App() {
  return (   
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/homepage' element={<Homepage />} />
              <Route path='/register' element={<RegisterForm/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/myHouses' element={<MyHousesPanel/>} />
              <Route path='/housePanel' element={<HousePanel/>} />
              <Route path='/housePanel/:slug' element={<RoomPanel/>} />
              
              <Route path='*' element={<p>No hemos encontrado esta página.</p>} /> TODO: Hay que crear la página de 404 NotFound
              {/* para ver tema de customizar página 404 https://naveenda.medium.com/creating-a-custom-404-notfound-page-with-react-routers-56af9ad67807 */}
          </Routes>    
        </BrowserRouter>
  );
}

export default App;
