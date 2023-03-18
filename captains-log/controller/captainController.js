
//load
const Log = require('../models/CaptainModel')


module.exports.index = async (req, res) => {
    
    const logsData = await Log.find()
    console.log(logsData)
    res.render('logs/Index', { logs:logsData })  //result - array of data
}
module.exports.show = async (req, res) => {
    const logsData = await Log.findById(req.params.id)
    res.render('logs/Show', { logs:logsData })
}

module.exports.new = (req, res) => {
    res.render('logs/New')
}

module.exports.create = async(req, res) =>{
    if (req.body.shipIsBroken){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    try{
        await Log.create(req.body)
    }catch(err){
        console.log('error', err)
    }
    res.redirect('/logs')
}

module.exports.delete = async (req, res) => {
    try{
       await Log.findByIdAndDelete(req.params.id)
       res.redirect('/logs')
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

module.exports.edit = async(req, res) => {
    
    const logsData = await Log.findById(req.params.id)  
    res.render('logs/Edit', { logs: logsData}) 
}

module.exports.update = async (req, res) => {
    
    console.log(req.body)

    if (req.body.shipIsBroken){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }     
    try{
       await Log.findByIdAndUpdate(req.params.id, req.body) //finding by id and updating the body
       res.redirect(`/logs/${req.params.id}`)
    } catch(err){
        console.log('error is ', err)
    }
   
}

module.exports.seed = async (req, res) => {
    
    try{
     await Log.deleteMany({})
     await Log.create(logs)
     res.redirect('/logs')
    } catch (err){
    console.log(err)
    res.send(err.message)
   }
}