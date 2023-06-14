//Es dentro de esta carpeta de apiService en donde meteré todas las conexiones que hagamos con el backend, para que quede más limpio.
import axios from "axios";

export const registerRequest = (user) => {
    axios.post('http://localhost:9000/users/register', user)
    console.log(user);
};

export const loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:9000/users/login', {email, password})
      //console.log('La respuesta al login es: ', response);
      const token = response.data.token ;
      //console.log('este es el token: ', token);

      window.localStorage.setItem('token', token); //Con esto estamos guardando en el LocalStorage el token del usuario.
    } catch(error) {
        console.log(error);
        // setError(error.response.data.result)
    }
  };


export const getMyHousePanel = async () => {
    try {
        const response = await axios.get('http://localhost:9000/rooms/', {headers: {Authorization: localStorage.getItem('token')}})
        console.log('Que es response: ', response);
    } catch (error) {
        console.log('Este es el error: ', error)
    }
};

export const getAllRooms = async () => {
    const { data } = await axios.get('http://localhost:9000/rooms/');
    return data;
};

export const postNewRoom = async (name, type) => {
    const response = await axios.post('http://localhost:9000/rooms/', name, type);
    getAllRooms()
    return;
};
// FUNCIÓN ANTIGUA
// export const postNewRoom = async () => {
//     const { data } = await axios.post('http://localhost:9000/rooms/', roomData)
//     getAllRooms(); //llamamos de nuevo al get nada más postear para que se realice una sincronización y recibamos la nueva habitación.
//     return data;
// };

export const getAllDevices = async () => {
    const { data } = await axios.get('http://localhost:9000/devices/');
    return data;
};

export const postNewDevice = async () => {
    const { data } = await axios.post('http://localhost:9000/devices/', /*datos del post{nameDevice, typeDevice}*/)
    getAllDevices(); //llamamos de nuevo al get nada más postear para que se realice una sincronización y recibamos el nuevo device.
    return data;
}

