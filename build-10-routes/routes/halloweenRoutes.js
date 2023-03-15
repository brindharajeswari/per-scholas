const express = require('express')
const router = express.Router()

const halloweenController = require('../controllers/halloweenController')
router.get('/', halloweenController.index)

module.exports = router