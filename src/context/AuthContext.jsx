import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import { registerRequest } from '../apiService/index';
import { loginRequest } from "../apiService/index";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error ('useAuth must be used within an AuthProvider');
    } return context
};

export const AuthProvider = ({children}) => {
    
    const [ user, setUser ] = useState(null);
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ errors, setErrors ] = useState([]);

    //Dentro de esta función validamos que el usuario se registra y lo marcamos como autenticado.
    const signUp = async (user) => {
        try {
            const res = await registerRequest(user)
            //console.log("singup res", res);
            setUser(user);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data);
        }
    };

     //Dentro de esta función validamos que el usuario se loguea y lo marcamos como autenticado.
    const signIn = async (user) => { //TODO: sustituir try catch por If ---> si res = true --> continua || si res = false --> 
        const res = await loginRequest(user)
        if (res){
            setUser(user);
            setIsAuthenticated(true);  
        } else{
            console.log("Error en el logueo")
            return <Typography>El usuario o la contraseña no son válidos.</Typography>
        }
    }


    //eliminar mensajes de error tras 5 segundos
    useEffect(()=>{
        if(errors.length>0){
            const timer = setTimeout(()=>{
                setErrors([])
            },5000)
            return ()=>clearTimeout(timer)
        }
    }, [errors])

    


    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            user,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )  
};
