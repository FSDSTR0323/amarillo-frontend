var express = require('express');
const { authRequired } = require('../middlewares/validateToken');
var router = express.Router();

deviceController = require('../controllers/deviceController');

//Con autenticación
router.post('/', authRequired ,deviceController.addDevice);
router.get('/:deviceId?', authRequired, deviceController.getDevices); 
router.put('/:deviceId', authRequired, deviceController.updateDevice);
router.delete('/:deviceId', authRequired, deviceController.deleteDevice);

// router.post('/', deviceController.addDevice);
// router.get('/:deviceId?',  deviceController.getDevices); 
// router.put('/:deviceId',  deviceController.updateDevice);
// router.delete('/:deviceId',  deviceController.deleteDevice);
// router.get('/',  deviceController.getDevices);

module.exports = router;