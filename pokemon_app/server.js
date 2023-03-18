require('dotenv').config()

const express = require('express')

const connectDB = require('./config/db')

const app = express()

const PORT = 3000

connectDB();

const pokemonsRoutes = require('./routes/pokemonsRoutes')

const { createEngine } = require('jsx-view-engine')
const methodOverride = require('method-override')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())


app.use(express.urlencoded({ extended: true }))  
app.use(methodOverride('_method'))   


app.use('/pokemons', pokemonsRoutes)


app.listen(PORT, () => {
    console.log(`lisenting on port: ${PORT}`);
})