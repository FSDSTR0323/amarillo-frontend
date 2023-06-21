import './App.css';
import React from 'react';
import { useEffect } from 'react';

//Importamos el contexto para los ususarios
import { AuthProvider } from './context/AuthContext';

//IMPORTANDO REACT ROUTER DOM --- ENRUTADO
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Pages
import Homepage from './componentes/containers/Homepage';               //Landing page HOMEHUB360
import RegisterForm from './componentes/forms/RegisterForm/index.tsx';   
import Login from './componentes/containers/Login';                     //Ir a mi panel
import MyHousesPanel from './componentes/containers/AllHousesPanel';    

import HousePanel from './componentes/containers/HousePanel';
import RoomPanel from './componentes/containers/RoomPanel';
import ProtectedRoutes from './ProtectedRoutes';
import DeviceList from './componentes/DeviceList/DeviceList';

function App() {
  return (
    <AuthProvider>
          <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Homepage/>} />
                <Route path='/register' element={<RegisterForm/>} />
                <Route path='/login' element={<Login/>} />

                <Route element={<ProtectedRoutes />}>
                  <Route path='/myHouses' element={<MyHousesPanel/>} />
                  <Route path='/housePanel' element={<HousePanel/>} />
                  <Route path='/housePanel/:slug' element={<RoomPanel/>} /> TODO: Revisar esta ruta: cada estancia nos redirige a un panel de dispositivos
                </Route>

                <Route path='*' element={<p>No hemos encontrado esta página.</p>} /> TODO: Hay que crear la página de 404 NotFound
                {/* para ver tema de customizar página 404 https://naveenda.medium.com/creating-a-custom-404-notfound-page-with-react-routers-56af9ad67807 */}
            </Routes>    
          </BrowserRouter>
    </AuthProvider>   
  );
}

export default App;
