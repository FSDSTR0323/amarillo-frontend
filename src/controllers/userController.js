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
    // users.push(newUser);

    res.status(200).send({msg:'¡Usuario creado correctamente!', token})
    } catch(error) {
        console.log(error)
    }
};

//Necesitamos crear una función que nos devuelva un array de objetos. Cada objeto es un usuario.
//Este endpoint nos va a servir para llamar a todos los usuarios.
const getUsers = (req, res) => {
    User.find()
    .then(userDocs => {
        if(userDocs.length === 0) {
            res.status(404).send({msg: "No se han encontrado usuarios."})
        } else {
            console.log('Estos son mis usuarios: ', userDocs);
            return userDocs
        }
    })
    .catch(error => res.status(400).send(error))
};

const loginUser = async (req, res) => {
    try {
        //1º Cogemos todos los datos del front con req.body
        const { email, password } = req.body;
        console.log('mi req body es: ', req.body);
        if(!(email && password)){
            return res.status(400).send({msg:'Para acceder tienes que introducir tu email y tu contraseña de usuario.'})
        };
        //2º validamos y 3º Encontramos al ususario en la BD
        //Comprobamos que la contraseña que el usuario nos ha enviado es la correcta --- bcrypt nos ofrece facilidades para hacerlo.

        //Llamar a nuestro array de usuarios y encontrar el usuario que está haciendo login.
        const userFound = await User.findOne( { email: email } )
        console.log('el usuario encontrado es: ', userFound);
        if (userFound && (await bcrypt.compare(password, userFound.password))) {
            //4º Si se cumple la condición de que existe el usuario y la contraseña es correcta -> Enviamos el token para este usuario.
            const token = jwt.sign(
                {id: userFound._id, //el campo _id que nos facilita mongoose.
                email: userFound.email},
                mySecret, //mySecret traido desde las variables de entorno .env
                { expiresIn: '2h'} //propiedad para expirar el token en 2 horas.
            );
            console.log("Token generado: ", token)
            userFound.token = token
            //userFound.password = undefined

            //Una vez tenemos todos estos pasos, enviamos la cookie para el usuario en el token. Sección de la cookie a continuación.
            const options = {
                    expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
                    httpOnly: true,
            };
            return res.status(200).json({success: true, token})
        } else { return res.status(400).send({msg: 'Usuario o contraseña incorrectos.'}) }
    } catch(error) {
        console.log(error);
        return res.status(400).send({msg: 'Usuario o contraseña incorrectos.'})
    }
};

//Este endpoint nos va a servir para llamarnos a nosotros mismos. Es el endpoint de "mi perfil"
const myUser = (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    console.log('token es: ', token);
    //Ahora, decodificamos el token usando la función .verify!
    try{
        const decodedToken = jwt.verify(token, mySecret)
        console.log('El token decodificado es: ', decodedToken);
        res.status(200).send({ result: 'success', data: decodedToken })
    } catch(error) {
        console.log('Hay un error al tratar de verificar el token.')
        res.status(400).send({msg: 'No es un token válido.'})
    }
};


module.exports = {
    registerNewUser,
    loginUser,
    getUsers,
    myUser,
};

