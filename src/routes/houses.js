var express = require('express');
var router = express.Router();

houseController =require('../controllers/houseController.js');

router.post('/', houseController.addRoom);
router.get('/:roomId?', houseController.getRooms); 
router.put('/:roomId', houseController.updateRoom);
router.delete('/:roomId', houseController.deleteRoom);

module.exports = router;