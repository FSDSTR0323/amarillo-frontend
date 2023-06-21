import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postNewHouse } from '../../../apiService';
import { TextField, Stack, Select, MenuItem } from '@mui/material';

const AddHouseForm = () => {
  const { register, handleSubmit } = useForm();
  const [textFields, setTextFields] = useState([]);

  const addTextFields = () => {
    setTextFields([
      ...textFields,
      { nombre: '', direccion: '', tamaño: '', fecha: '' },
    ]);
  };

  const handleTextChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...textFields];

    // Validar longitud máxima del campo "nombre"
    if (name === 'nombre' && value.length > 20) {
      return; // No permitir más caracteres si se alcanza la longitud máxima
    }

    values[index][name] = value;
    setTextFields(values);
  };

  const onSubmit = async (data) => {
    const { name, type } = data;
    const res = await postNewHouse(name, type);
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} width={400}>
        <TextField
          variant='filled'
          label='Name'
          type='name'
          {...register('name', { required: true })}
        />

        <Select
          labelId='demo-simple-select-standard-label'
          variant='filled'
          value={textFields}
          onChange={(e) => setHouseType(e.target.value)}
          label='Type'
          {...register('type', { required: true })}
        >
          <MenuItem value=''>Select type</MenuItem>
          {/* Opciones del Select */}
        </Select>
      </Stack>

      <button type='submit'>Enviar</button>

      <div>
        <button onClick={addTextFields}>Agregar campos</button>
        {textFields.map((textField, index) => (
          <div key={index}>
            <input
              type='text'
              name='nombre'
              value={textField.nombre}
              onChange={(event) => handleTextChange(index, event)}
              placeholder='Nombre'
            />
            <input
              type='text'
              name='direccion'
              value={textField.direccion}
              onChange={(event) => handleTextChange(index, event)}
              placeholder='Dirección'
            />
            <input
              type='text'
              name='tamaño'
              value={textField.tamaño}
              onChange={(event) => handleTextChange(index, event)}
              placeholder='Tamaño'
            />
            <input
              type='text'
              name='fecha'
              value={textField.fecha}
              onChange={(event) => handleTextChange(index, event)}
              placeholder='Fecha'
            />
            <input
              type='number'
              name='número de estancias'
              value={textField.numero}
              onChange={(event) => handleTextChange(index, event)}
              placeholder='Número de estancias'
            />
          </div>
        ))}
      </div>
    </form>
  );
};

export default AddHouseForm;
