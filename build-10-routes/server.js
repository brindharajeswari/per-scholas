
const express = require('express')

const app = express()

const PORT = 8080

const homeRoutes = require('./routes/homeRoutes')
const aboutRoutes = require('./routes/aboutRoutes')
const winterRoutes = require('./routes/winterRoutes')
const springRoutes = require('./routes/springRoutes')
const summerRoutes = require('./routes/summerRoutes')
const halloweenRoutes = require('./routes/halloweenRoutes')

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())


app.use('/', homeRoutes)
app.use('/about', aboutRoutes)
app.use('/winter', winterRoutes)
app.use('/spring', springRoutes)
app.use('/summer', summerRoutes)
app.use('/halloween', halloweenRoutes)

// app.get('/', (req,res) => {
//     res.send('<h1> <a href="home"> Home <h1>')
// })

// app.get('/about', (req,res) => {
//     res.send('<h1> <a href="about"> About <h1>')
// })

// app.get('/christmas', (req,res) => {
//     res.send('<h1> <a href="christmas crafts"> christmas craft <h1>')
// })

// app.get('/winter', (req,res) => {
//     res.send('<h1> <a href="winter crafts"> winter crafts <h1>')
// })

// app.get('/patricks', (req,res) => {
//     res.send('<h1> <a href="spring crafts"> patricks day crafts <h1>')
// })

// app.get('/spring', (req,res) => {
//     res.send('<h1> <a href="winter crafts"> spring crafts <h1>')
// })

app.listen(PORT, () => {
    console.log(`lisenting on port: ${PORT}`);
})