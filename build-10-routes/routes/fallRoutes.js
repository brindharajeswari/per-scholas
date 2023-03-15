const express = require('express')
const router = express.Router()

const fallController = require('../controllers/fallController')
router.get('/', fallController.index)

module.exports = router