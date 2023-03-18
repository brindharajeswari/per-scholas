const express = require('express')
const router = express.Router()

// I.N.D.U.C.E.S 
// Index, New, Delete, Update, Create, Edit, Show

const pokemonsController = require('../controllers/pokemonsController')

//index
router.get('/', pokemonsController.index)

//new route
router.get('/new', pokemonsController.new)

router.delete('/clear', pokemonsController.clear)

//delete route
router.delete('/:id', pokemonsController.delete) 

//update route
router.put('/:id', pokemonsController.update)

router.put('/seed', pokemonsController.seed)

//create route
router.post('/', pokemonsController.create)

//edit
router.get('/:id/edit', pokemonsController.edit)

//show route for pokemon, attach it to route
router.get('/:id', pokemonsController.show)

module.exports = router