const express = require('express')
const router = express.Router()

const easterController = require('../controllers/easterController')
router.get('/', easterController.index)

module.exports = router