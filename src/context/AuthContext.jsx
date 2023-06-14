import React from "react";
import { createContext, useState, useContext } from "react";
import { registerRequest } from '../apiService/index';
import { loginUser } from "../apiService/index";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error ('useAuth must be used within an AuthProvider');
    } return context
};

export const AuthProvider = ({children}) => {
    const [ user, setUser ] = useState(null);

    //Creamos otros estados para decirle al resto de páginas que este usuario está autenticado. Y el estado de los errores.
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ errors, setErrors ] = useState([]);

    //Dentro de esta función validamos que el usuario se registra y lo marcamos como autenticado.
    const signUp = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res);
            setUser(res);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
            setErrors(error.response.data);
        }
    };

    const signIn = async (user) => {
        try{
            const res = await loginUser(user)
            setUser(res);
            setIsAuthenticated(true);
        } catch(error){
            console.log(error);
            setErrors(error.response.data);
        }
    }

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
