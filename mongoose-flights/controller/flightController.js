//load
const {Flight, Destination} = require('../models/FlightModel')
//const Destination = require('../models/FlightModel')

module.exports.index = async (req, res) => {
    
    const flightsData = await Flight.find()
    console.log(flightsData)
    res.render('flights/Index', { flights:flightsData })  //result - array of data
}

module.exports.show = async (req, res) => {
    const flightsData = await Flight.findById(req.params.id)
    res.render('flights/Show', { flights:flightsData })
}

module.exports.new = (req, res) => {
    const newFlight = new Flight();
	// Obtain the default date
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('flights/New', {departsDate});
    //  res.render('flights/New')
}

module.exports.create = async(req, res) =>{
    // if (req.body.shipIsBroken){
    //     req.body.shipIsBroken = true
    // } else {
    //     req.body.shipIsBroken = false
    // }
    try{
        await Flight.create(req.body)
    }catch(err){
        console.log('error', err)
    }
    res.redirect('/flights')
}

module.exports.delete = async (req, res) => {
    try{
       await Flight.findByIdAndDelete(req.params.id)
       res.redirect('/flights')
    }catch(err){
        console.log(err)
        res.send(err.message)
    }
}

module.exports.edit = async(req, res) => {
    
    const flightsData = await Flight.findById(req.params.id)  
    res.render('flights/Edit', { flights: flightsData}) 
}

module.exports.update = async (req, res) => {
    
    console.log(req.body)

    // if (req.body.shipIsBroken){
    //     req.body.shipIsBroken = true
    // } else {
    //     req.body.shipIsBroken = false
    // }     
    try{
       await Flight.findByIdAndUpdate(req.params.id, req.body) //finding by id and updating the body
       res.redirect(`/flights/${req.params.id}`)
    } catch(err){
        console.log('error is ', err)
    }
   
}

module.exports.seed = async (req, res) => {
    
    try{
     await Flight.deleteMany({})
     await Flight.create(logs)
     res.redirect('/flights')
    } catch (err){
    console.log(err)
    res.send(err.message)
   }
}

module.exports.clear = async (req, res) => {
   
    try{
        await Flight.deleteMany({})
        res.redirect('/flights')
    } catch(err){
        console.log(err)
        res.send(err.message)
    }
    
}

////////destination

module.exports.createDestination = async (req, res) => {
    // create a comment by updating the comments property in post
    await Flight.findByIdAndUpdate(req.params.id, {
        // push the req.body to the comments property/field of this post document
        $push: {
            destinations: req.body
        }
    })
    res.redirect(`/flights/${req.params.id}`)
}

module.exports.showDestination = async (req, res) => {
    // find the post and filter it's comments property array
    const flightsData = await Flight.findById(req.params.id).find().sort({ createdAt: 1 })
    const [ destination ] = flightsData.destinations.filter(destination => destination._id.toString() === req.params.did) 
    res.render('destination/Edit', { FlightId: req.params.id, destination })
}