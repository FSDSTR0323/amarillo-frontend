let express = require('express');
let router = express.Router();

userController = require('../controllers/userController');

//Ahora escribiremos las rutas que nos van a permitir gestionar los usuarios.

router.post('/register', userController.registerNewUser);
router.post('/login', userController.loginUser);
router.get
router.put
router.delete


module.exports = router ;