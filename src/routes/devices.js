var express = require('express');
var router = express.Router();

roomController =require('../controllers/deviceController');

router.post('/', deviceController.addDevice);
router.get('/:deviceId?', deviceController.getDevice); 
router.put('/:deviceId', deviceController.updateDevice);
router.delete('/:deviceId', deviceController.deleteDevice);

module.exports = router;