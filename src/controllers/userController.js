const User = require('../models/userModel');
const jwt = require('jsonwebtoken')

require('dotenv').config();

const mySecret = process.env.TOKENSECRET;

let users = [];


//Vamos a crear un nuevo usuario cuyos datos nos llegarán desde el formulario de registro del front.
const addNewUser = (req, res, next) => {
    const { name, email, password } = req.body;
    console.log('Soy el POST que registra un nuevo usuario!')
    const newUser = { email, password };
    users.push(newUser);

    //Ahora creamos el token para este nuevo usuario
    const token = jwt.sign({name, email}, mySecret, {expiresIn: '1h'})
    res.status(200).send({msg: 'ok', token });
};

//ahora el endpoint para hacer login en un determinado usuario ya creado.
const loginUser = (req, res, next) => {
    const { email, password } = req.body;
    console.log('Soy el POST que logea un usuario!');

    //Tenemos que referirnos al usuario ya existente en nuestra BD.
    const userFoundInDB = users.find( user => user.email === 'email')

    if(!userFoundInDB){ return res.status(400).send({msg: 'El usuario no existe. Debes registrarte como usuario.'})};

    if(userFoundInDB.password !== password) {return res.status(400).send({msg: 'La contraseña no es correcta.'})};

    const token = jwt.sign({name: userFoundInDB.name, email}, mySecret,{expiresIn: '1h'});
    return res.status(200).send({msg: 'ok', token });
}


module.exports = {
    addNewUser,
    loginUser,
};

