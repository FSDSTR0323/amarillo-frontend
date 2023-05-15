var express = require('express');
var router = express.Router();

roomController =require('../controllers/roomController.js');

router.post('/', roomController.addRoom)

module.exports = router;