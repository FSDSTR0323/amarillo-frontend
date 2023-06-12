var express = require('express');
var router = express.Router();

deviceController = require('../controllers/deviceController');

router.post('/', deviceController.addDevice);
router.get('/:deviceId?', deviceController.getDevices); 
router.put('/:deviceId', deviceController.updateDevice);
router.delete('/:deviceId', deviceController.deleteDevice);

module.exports = router;