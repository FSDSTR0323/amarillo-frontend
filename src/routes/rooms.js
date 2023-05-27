var express = require('express');
var router = express.Router();

roomController =require('../controllers/roomController.js');

router.post('/', roomController.addRoom);
router.get('/:roomId?', roomController.getRooms); 
router.put('/:roomId', roomController.updateRoom);
router.delete('/:roomId', roomController.deleteRoom);

module.exports = router;