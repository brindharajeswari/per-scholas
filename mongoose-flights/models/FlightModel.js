//const Destination = require("../models/DestinationModel")

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationsSchema = new Schema({
    airport: {type: String, required:true, enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']},
    arrival: {type: Date}
    // departs: {type: Date, required: true}
},
{timestamps: true}
)


const flightsSchema = new Schema({
    airline: {type: String, required:true, enum: ['American', 'Southwest','United']},
    flightnumber: {type: String, required: 10 <= 9999},
    departs: {type: Date, default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))}, 

    airport: {type: String, required:true, enum: ['AUS', 'DAL', 'LAX', 'SAN','SEA']},
    // arrival: {type: Date},
    destinations: [destinationsSchema] //
},
{timestamps: true}
)

const Flight= mongoose.model('flights', flightsSchema);

const Destination= mongoose.model('destinations', destinationsSchema);

module.exports = {Flight, Destination}

