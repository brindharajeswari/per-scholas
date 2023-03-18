const express = require('express')
const router = express.Router()

// I.N.D.U.C.E.S 
// Index, New, Delete, Update, Create, Edit, Show

const captainController = require('../controller/captainController')

router.get('/', captainController.index)

//new route
router.get('/new', captainController.new)

router.delete('/:id', captainController.delete) 

router.put('/:id', captainController.update) 

router.post('/', captainController.create)

router.get('/:id/edit', captainController.edit)

router.get('/:id', captainController.show)


module.exports = router