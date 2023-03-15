const express = require('express');
const router = express.Router();

const springController = require('../controllers/springController');
router.get('/', springController.index);

module.exports = router;