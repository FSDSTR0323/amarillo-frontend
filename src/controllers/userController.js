const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const mySecret = process.env.TOKENSECRET;

const registerNewUser = async (req, res) => {

    try {
    //Tomamos el data que tengamos en el body - frontend
    const { name, email, password } = req.body;
    console.log('este es el body de la petición: ', req.body);
    //todos los datos que necesitamos deben estar presentes para poder registrar al nuevo usuario:
    if (!( name && email && password )) {
        return res.status(400).send({msg:'Tienes que rellenar todos los campos para realizar el registro.'})
    }
    //Chequeamos que el ususario no exista ya dentro de nuestra BD --- basado en el email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send({msg:'Este usuario ya está registrado.'})
    }
    //Ahora requerimos de la libreria de bcrypt para encriptar la contraseña que nos pasan por el front.
    const encriptedPassword = await bcrypt.hash(password, 10)
    //Generamos y guardamos el nuevo usuario que enviaremos a la BD
    const newUser = await User.create({
        name,
        email,
        password: encriptedPassword,
    });
    //Finalmente, generamos el token para el usuario.
    const token = jwt.sign(
        {id: User._id, email}, //este es el payload del token.
        mySecret, //este es el secreto que traemos como variable de entorno con process.env.TOKENSECRET
        { expiresIn: '2h'}
    );
    //console.log(token);

    newUser.token = token;
    newUser.password = undefined;

    res.status(200).send({msg:'¡Usuario creado correctamente!'})
    } catch(error) {
        console.log(error)
    }
};

const loginUser = async (req, res) => {
    try {
        //1º Cogemos todos los datos del front con req.body
        const { email, password } = req.body;
        if(!(email && password)){
            return res.status(400).send({msg:'Para acceder tienes que introducir tu email y tu contraseña de usuario.'})
        };
        //2º validamos y 3º Encontramos al ususario en la BD
        //Comprobamos que la contraseña que el usuario nos ha enviado es la correcta --- bcrypt nos ofrece facilidades para hacerlo.
        const userFound = await User.find( user => user.email === 'email')
        if (userFound && (await bcrypt.compare(password, User.password))) {
            //4º Si se cumple la condición de que existe el usuario y la contraseña es correcta -> Enviamos el token para este usuario.
            const token = jwt.sign(
                {id: userFound._id, //el campo _id que nos facilita mongoose.
                email: userFound.email},
                mySecret, //mySecret traido desde las variables de entorno .env
                { expiresIn: '2h'} //propiedad para expirar el token en 2 horas.
            );
            userFound.token = token
            userFound.password = undefined

            //Una vez tenemos todos estos pasos, enviamos la cookie para el usuario en el token. Sección de la cookie a continuación.
            const options = {
                    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
                    httpOnly: true,
            };
            res.status(200).cookie('token', token, options).send({success: true}, token, User)
        }
    } catch(error) {
        console.log(error)
    }
};

/* CÓDIGO ESCRITO EL SÁBADO --- ÁLVARO
//Vamos a crear un nuevo usuario cuyos datos nos llegarán desde el formulario de registro del front.
const addNewUser = (req, res, next) => {
    const { name, email, password } = req.body;
    console.log('Soy el POST que registra un nuevo usuario!')

    const newUser = { email, password };
    users.create(newUser);

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
*/

module.exports = {
    registerNewUser,
    loginUser
};

