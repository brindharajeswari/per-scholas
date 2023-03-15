const express = require('express');
const router = express.Router();

const winterController = require('../controllers/winterController');
router.get('/', winterController.index);

module.exports = router;