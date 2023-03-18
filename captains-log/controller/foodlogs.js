const FoodLog = require('../models/FoodLogModel')


module.exports.index = async (req, res) => {
    
    const foodlogsData = await FoodLog.find()
    console.log(foodlogsData)
    res.render('foodlogs/Index', { foodlogs:foodlogsData })  
}


module.exports.show = async (req, res) => {
    const foodlogsData = await FoodLog.findById(req.params.id)
    res.render('foodlogs/Show', { foodlogs:foodlogsData })
}

module.exports.new = (req, res) => {
    res.render('foodlogs/New')
}

module.exports.create = async(req, res) =>{
    if (req.body.isHealthy){
        req.body.isHealthy = true
    } else {
        req.body.isHealthy = false
    }
    try{
        await FoodLog.create(req.body)
    }catch(err){
        console.log('error', err)
    }
    res.redirect('/foodlogs')
}

module.exports.delete = async (req, res) => {
    try{
       await FoodLog.findByIdAndDelete(req.params.id)
       res.redirect('/foodlogs')
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

module.exports.edit = async(req, res) => {
    
    const foodlogsData = await FoodLog.findById(req.params.id)  
    res.render('foodlogs/Edit', { foodlogs: foodlogsData}) 
}

module.exports.update = async (req, res) => {
    
    console.log(req.body)

    if (req.body.isHealthy){
        req.body.isHealthy = true
    } else {
        req.body.isHealthy = false
    }     
    try{
       await FoodLog.findByIdAndUpdate(req.params.id, req.body) //finding by id and updating the body
       res.redirect(`/foodlogs/${req.params.id}`)
    } catch(err){
        console.log('error is ', err)
    }
   
}

module.exports.seed = async (req, res) => {
    
    try{
     await FoodLog.deleteMany({})
     await FoodLog.create(foodlogs)
     res.redirect('/foodlogs')
    } catch (err){
    console.log(err)
    res.send(err.message)
   }
}

module.exports.clear = async (req, res) => {
    
    try{
        await FoodLog.deleteMany({})
        res.redirect('/foodlogs')
    } catch(err){
        console.log(err)
        res.send(err.message)
    }
    
}