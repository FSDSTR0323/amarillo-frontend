//recibir un listado de viviendas:

//hook form para usuario y login,, en vez de useState y useEffect:


import { useState } from "react";

const NewHouseForm = () => {
    const [inputFields, setInputFields] = useState([]);
  
    const addInputFields = () => {
      setInputFields([
        ...inputFields,
        { 
        name: '', 
        address: '',
        size: '',
        date: '' },
      ]);
    };
  
    const handleInputChange = (index, event) => {
      const { name, value } = event.target;
      const values = [...inputFields];
      
      // Validar longitud máxima del campo "nombre"
      if (name === 'nombre' && value.length > 20) {
        return; // No permitir más caracteres si se alcanza la longitud máxima
      }
  
      values[index][name] = value;
      setInputFields(values);
    };
  
    return (
      <div>
        <button onClick={addInputFields}>Agregar campos</button>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <input
              type="text"
              name="nombre"
              value={inputField.nombre}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="direccion"
              value={inputField.direccion}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Dirección"
            />
            <input
              type="text"
              name="tamaño"
              value={inputField.tamaño}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Tamaño"
            />
            <input
              type="text"
              name="fecha"
              value={inputField.fecha}
              onChange={(event) => handleInputChange(index, event)}
              placeholder="Fecha"
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default NewHouseForm;