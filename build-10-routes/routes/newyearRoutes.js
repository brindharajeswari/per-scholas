const express = require('express');
const router = express.Router();

const newyearController = require('../controllers/newyearController');
router.get('/', newyearController.index);

module.exports = router;