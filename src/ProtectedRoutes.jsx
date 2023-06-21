import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

const ProtectedRoutes = () => {

    const {isAuthenticated } = useAuth()
    //Si el usuario no está autenticado, lo devolvemos a la ruta del login y con replace evitamos que vuelva a la ruta anterior.
    if(!isAuthenticated) return <Navigate to='/login' replace/>
  
    //Si el usuario esta Authenticated, utilizamos Outlet para que continue con su ruta
    return <Outlet />
};

export default ProtectedRoutes