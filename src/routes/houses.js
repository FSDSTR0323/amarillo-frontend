var express = require('express');
var router = express.Router();

houseController =require('../controllers/houseController.js');

router.post('/', houseController.addHouse);
router.get('/:roomId?', houseController.getHouse); 
router.put('/:roomId', houseController.updateHouse);
router.delete('/:roomId', houseController.deleteHouse);

module.exports = router;