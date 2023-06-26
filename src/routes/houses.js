var express = require('express');
var router = express.Router();

houseController =require('../controllers/houseController.js');

router.post('/', houseController.addHouse);
router.get('/:houseId?', authRequired, houseController.getHouses); 
router.put('/:houseId', authRequired,houseController.updateHouse);
router.delete('/:houseId', houseController.deleteHouse);

module.exports = router;