import React from "react";
//recibir un listado de viviendas:
//hook form para usuario y login,, en vez de useState y useEffect:


import { useState } from "react";

const NewHouseForm = () => {
    const { register, control, handleSubmit } = useForm();
     const { fields, append, remove } =useFieldArray({
      control, 
      name: 'inputFields',
     });
  
const onSubmit = (data) => {
     console.log(data);
        
    }

    
  
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
        <button type="button" onClick={() => append({ name: '', address: '', size: '', date: '' })}>
        Agregar 
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          { fields.map((field, index) =>(
          <div key={field.id}>
            <input
              type="text"
              name={`inputFields[${index}].name`}
              placeholder="Nombre"
              ref={register()}
              />
              <input
                type="text"
                name={`inputFields[${index}].address`}
                placeholder="Dirección"
                ref={register()}
              />
              <input
                type="text"
                name={`inputFields[${index}].size`}
                placeholder="Tamaño"
                ref={register()}
              />
              <input
                type="text"
                name={`inputFields[${index}].date`}
                placeholder="Fecha"
                ref={register()}
              />
              <button type="button" onClick={() => remove(index)}>
                Eliminar
              </button>
            </div>
          ))}
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
  
  export default NewHouseForm;
  
  
  
  
  
  
  