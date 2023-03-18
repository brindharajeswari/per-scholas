const express = require('express')
const router = express.Router()

// I.N.D.U.C.E.S 
// Index, New, Delete, Update, Create, Edit, Show

const foodLogController = require('../controller/foodlogs')


router.get('/', foodLogController.index)

router.get('/new', foodLogController.new)

router.delete('/clear', foodLogController.clear)

router.delete('/:id', foodLogController.delete) 

router.put('/:id', foodLogController.update) 

router.put('/seed', foodLogController.seed)

router.post('/', foodLogController.create)

router.get('/:id/edit', foodLogController.edit)

router.get('/:id', foodLogController.show)


module.exports = router