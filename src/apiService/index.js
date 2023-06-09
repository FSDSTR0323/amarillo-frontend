//Es dentro de esta carpeta de apiService en donde meteré todas las conexiones que hagamos con el backend, para que quede más limpio.

import axios from "axios";


export const getAllRooms = async () => {
    const { data } = await axios.get('http://localhost:9000/rooms/');
    return data;
};

export const postNewRoom = async () => {
    const { data } = await axios.post('http://localhost:9000/rooms/', roomData)
    getAllRooms(); //llamamos de nuevo al get nada más postear para que se realice una sincronización y recibamos la nueva habitación.
    return data;
}

export const getAllDevices = async () => {
    const { data } = await axios.get('http://localhost:9000/devices/');
    return data;
};


export const postNewDevice = async () => {
    const { data } = await axios.post('http://localhost:9000/devices/', /*datos del post{nameDevice, typeDevice}*/)
    getAllDevices(); //llamamos de nuevo al get nada más postear para que se realice una sincronización y recibamos el nuevo device.
    return data;
}