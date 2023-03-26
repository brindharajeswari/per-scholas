const express = require('express')
const router = express.Router()

// I.N.D.U.C.E.S 
// Index, New, Delete, Update, Create, Edit, Show

const flightController = require('../controller/flightController')

router.get('/', flightController.index)

router.get('/new', flightController.new)

router.delete('/clear', flightController.clear)

router.delete('/:id', flightController.delete) 

router.put('/:id', flightController.update) 

router.post('/', flightController.create)

router.get('/:id/edit', flightController.edit)

router.get('/:id', flightController.show)


//const destinationController = require('../controller/destinationController')

router.post('/:id', flightController.createDestination)

router.get('/:id/destination/:did', flightController.showDestination)

module.exports = router