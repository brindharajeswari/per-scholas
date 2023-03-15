const express = require('express')
const router = express.Router()

const thanksgivingController = require('../controllers/thanksgivingController')
router.get('/', thanksgivingController.index)

module.exports = router