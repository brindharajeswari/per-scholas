const pokemons = require('../models/pokemons')
const Pokemon = require('../models/PokemonsModel.js')

module.exports.index = async(req,res) => {
    try{
        const pokemons = await Pokemon.find()
        //console.log(pokemons)
        //console.log('inside controller')
        res.render('pokemons/Index', { pokemons })
    }
    catch{
        console.log(err)
        res.send(err.message)
    }  
}

module.exports.show = async(req,res) => {
    try{
        const pokemon = await Pokemon.findById(req.params.id)
        res.render('pokemons/Show', { pokemon })
    } catch(err){
        console.log(err)
        res.send(err.message)
    }  
}

//new
module.exports.new = (req, res) =>{
    res.render('pokemons/New')
}

//post- create (POST /pokemons)
module.exports.create = async(req,res) => {
    console.log('POST /pokemons')
    console.log(req.body)   
    // if (req.body.readyToEat){
    //     req.body.readyToEat = true
    // } else {
    //     req.body.readyToEat = false
    // }
    try{
        const result = await Pokemon.create(req.body)
        console.log(result)
    }catch(err) {
        console.log(err)   
        res.send(err.message)   
    }     
    res.redirect('/pokemons')    
}

//DELETE /pokemons/:name
module.exports.delete = async(req, res) => {
   try{
    await Pokemon.findByIdAndDelete(req.params.id)
    res.redirect('/pokemons')
   }catch(err){
    console.log(err)   
    res.send(err.message) 
   }
}

//EDIT -  GET /pokemons/:name/edit    
module.exports.edit = async (req, res) => {
    const pokemon = await Pokemon.findById(req.params.id)
    res.render('pokemons/Edit', { pokemon })
}

//Update - PUT /pokemons/:name
module.exports.update = async(req, res) => {
    console.log(req.body)
     
     try{
        await Pokemon.findByIdandUpdate(req.params.id,req.body)
        res.redirect(`/pokemons/${req.params.id}`)
     } catch (err) {
        console.log('error is', err)
     }
    
}

//POST /pokemons/seed
module.exports.seed = async (req, res) => {
    
    try{
     await Pokemon.deleteMany({})
     await Pokemon.create(pokemons)
     res.redirect('/pokemons')
    } catch (err){
    console.log(err)
    res.send(err.message)
   }
}

//DELETE /pokemons/clear
module.exports.clear = async (req, res) => {
    //console.log('DELETE /pokemons/clear')
    try{
        await Pokemon.deleteMany({})
        res.redirect('/pokemons')
    } catch(err){
        console.log(err)
        res.send(err.message)
    }
    
}
