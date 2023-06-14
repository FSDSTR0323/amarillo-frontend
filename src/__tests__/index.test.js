import '@testing-library/jest-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';

// EN ESTA CARPETA VAMOS A GENERAR NUESTROS TESTS
// const RegisterForm = require('../componentes/forms/RegisterForm/index.tsx');
import RegisterForm from '../componentes/forms/RegisterForm';

//Vamos a comprobar que podemos hacer render del formulario:
test('Muestra el Formulario de registro cuando se carga la página', () => {
    // const testMessage = 'Mensaje de prueba'
    render(
        <BrowserRouter>
            <RegisterForm />
        </BrowserRouter>)
    expect(<RegisterForm />).toBeInTheDocument()
});


test('Introducir nombre, email y password es igual a Usuario registrado', () => {
    expect().toBe(userRegistered);
});
