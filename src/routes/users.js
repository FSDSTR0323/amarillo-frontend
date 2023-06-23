let express = require('express');
const { authRequired } = require('../middlewares/validateToken');
let router = express.Router();

userController = require('../controllers/userController');

//import { registerNewUser, loginUser } from '../models/userModel.js';


//Ahora escribiremos las rutas que nos van a permitir gestionar los usuarios.

router.post('/register', userController.registerNewUser);
router.post('/login', userController.loginUser);
//router.post('/logout', userController.logoutUser);

//Con autenticación
router.get('/',authRequired, userController.getUsers); //este endpoint nos devuelve todos los usuarios de la app en un array de objetos
router.get('/me', authRequired, userController.myUser);

// router.get('/', userController.getUsers); //este endpoint nos devuelve todos los usuarios de la app en un array de objetos
// router.get('/me',  userController.myUser);
// // router.put
// // router.delete

module.exports = router ;