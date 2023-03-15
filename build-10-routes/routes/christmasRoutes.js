const express = require('express')
const router = express.Router()

const christmasController = require('../controllers/christmasController')
router.get('/', christmasController.index)

module.exports = router