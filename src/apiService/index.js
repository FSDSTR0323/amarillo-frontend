//Es dentro de esta carpeta de apiService en donde meteré todas las conexiones que hagamos con el backend, para que quede más limpio.
import axios from "axios";

export const getAllRooms = async () => {
    const { data } = await axios.get('http://localhost:9000/rooms/');
    return data;
};