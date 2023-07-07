//Es dentro de esta carpeta de apiService en donde meteré todas las conexiones que hagamos con el backend, para que quede más limpio.
import axios from "axios";
import { BroadcastChannel } from "broadcast-channel";

const logOutChannel = new BroadcastChannel('logOut');


const API = 'http://localhost:9000'


export const registerRequest = async (user) => {
    console.log("Usuario por registrar: ", user)
    try{
        const response = await axios.post(`${API}/users/register`, user)
        const token = response.data.token ;
        if(token){
        return window.localStorage.setItem('token', token); //Con esto estamos guardando en el LocalStorage el token del usuario.
        }
        console.log("USER No válido");
    } catch(error) {
        console.log(error);
    }
    
};

export const loginRequest = async (user) => {
    //console.log("Usuario login: ", user)
    try {
        const response = await axios.post(`${API}/users/login`, user)
        console.log('esta es la response a login: ', response.data);
        const token = response.data.token ;
        if(token){
        window.localStorage.setItem('token', token);
        return true //Con esto estamos guardando en el LocalStorage el token del usuario.
        }
        console.log("USER No válido");
    
    } catch(error) {
        console.log('Esto es el error al login: ', error);
        return false
    }
};


//LOG OUT DE USUARIO ------------->
export const logUserOut = () => {
    
    logOutChannel.postMessage('LogOut')
    window.localStorage.removeItem('token');
    window.location.href = window.location.origin + '/'
};

export const logOutAllTabs = () => {
    logOutChannel.onmessage = () => {
        logUserOut();
        logOutChannel.close();
    }
};


//myHousePanel: hay que enviar el id del usuario a través del token, para autenticación en el back

export const getMyHousePanel = async (token) => {
    try {
        const response = await axios.get(`${API}/rooms/`, {headers: {Authorization: localStorage.getItem('token')}})
        //const response = await axios.get(`${API}/rooms?house=houseID`, {headers: {Authorization: localStorage.getItem('token')}})
        console.log('Que es response: ', response);
    } catch (error) {
        console.log('Este es el error: ', error)
    }
};


//ESto sería para pruebas, pero deberíamos experar siempre un id de casa
export const getAllRooms = async (houseId) => {
    console.log("Se piden habitaciones:")
    // const { data } = await axios.get(`${API}/rooms?houseId=${houseId}`, {headers: {Authorization: localStorage.getItem('token')}});
    const { data } = await axios.get(`${API}/rooms/${houseId}`, {headers: {Authorization: localStorage.getItem('token')}});
    
    console.log(data)
    return data;
};

//postNewRoom: hay que enviar el id de la casa en la que creo la habitación a parte del token
export const postNewRoom = async (name, type, roomImage, houseId) => {
    const response = await axios.post(`${API}/rooms/`, {name, type, roomImage, houseId}, {headers: {Authorization: localStorage.getItem('token')}})
//    const response = await axios.post(`${API}/rooms/house=houseID`, name, type, image, ); // {headers: {Authorization: localStorage.getItem('token')}}

    console.log('Esta es la respuesta al post: ', response);
    getAllRooms(houseId)
    return;
};

export const deleteRoom = async(id) => {
    const res = await axios.delete(`${API}/rooms/${id}`);
    console.log('Habitación eliminada correctamente', res);
    getAllRooms(houseId)
    return;
};


//--- DEVICES ----------
export const getDevices = async () => {
    const { data } = await axios.get(`${API}/devices/`); //{headers: {Authorization: localStorage.getItem('token')}}
    return data;
};

//postNewDevice: hay que enviar el id de la room en la que creo el device a parte del token
export const postNewDevice = async (props) => {
    const { data } = await axios.post(`${API}/devices/`, props )
    getDevices(); //llamamos de nuevo al get nada más postear para que se realice una sincronización y recibamos el nuevo device.
    return data;
}; 

export const deleteDevice = async (id) => {
    const res = await axios.delete(`${API}/devices/${id}`);
    console.log('Dispositivo eliminado correctamente', res);
    return getDevices()
};

//ALL HOUSES -----------------
//ALL HOUSES 
export const getAllHouses = async () => {
    console.log("Se piden las viviendas del usuario")
    const { data } = await axios.get(`${API}/houses/`, {headers: {Authorization: localStorage.getItem('token')}});
    console.log(data)
    return data;
};

// Se debería enviar el token y el usuario al que pertenece la casa en la petición
export const postNewHouse = async (name, type, street, number, district, city, country, houseSize, roomsNumber) => {
    const { data } = await axios.post(`${API}/houses/`, name, type, street, number, district, city, country, houseSize, roomsNumber);
    getAllHouses()
    return;
};
