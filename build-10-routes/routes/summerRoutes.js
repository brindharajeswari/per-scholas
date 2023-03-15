const express = require('express');
const router = express.Router();

const summerController = require('../controllers/summerController');
router.get('/', summerController.index);

module.exports = router;