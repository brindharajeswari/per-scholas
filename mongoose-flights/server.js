require('dotenv').config()

const express = require('express')

const connectDB = require('./config/db')

const app = express()

const PORT = 3000

connectDB();

const flightRoutes = require('./routes/flightRoutes')
//const destinationRoutes = require('./routes/destinationRoutes')


const { createEngine } = require('jsx-view-engine')
const methodOverride = require('method-override')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())


app.use(express.urlencoded({ extended: true }))  
app.use(methodOverride('_method'))  

app.use(express.static('public'))

app.use((req, res, next) => {
    console.log('inside middleware')
    //console.log('Hello world')
    next()   
})

app.use('/flights', flightRoutes)
//app.use('/destinations', destinationRoutes)


app.listen(PORT, () => {
    console.log(`lisenting on port: ${PORT}`);
})