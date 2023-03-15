
const express = require('express')

const app = express()

const PORT = 8080

const homeRoutes = require('./routes/homeRoutes')
const aboutRoutes = require('./routes/aboutRoutes')
const winterRoutes = require('./routes/winterRoutes')
const fallRoutes = require('./routes/fallRoutes')
const springRoutes = require('./routes/springRoutes')
const summerRoutes = require('./routes/summerRoutes')
const halloweenRoutes = require('./routes/halloweenRoutes')
const christmasRoutes = require('./routes/christmasRoutes')
const easterRoutes = require('./routes/easterRoutes')
const thanksgivingRoutes = require('./routes/thanksgivingRoutes')
const newyearRoutes = require('./routes/newyearRoutes')

const { createEngine } = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())


app.use('/', homeRoutes)
app.use('/about', aboutRoutes)
app.use('/winter', winterRoutes)
app.use('/fall', fallRoutes)
app.use('/spring', springRoutes)
app.use('/summer', summerRoutes)
app.use('/halloween', halloweenRoutes)
app.use('/christmas', christmasRoutes)
app.use('/easter', easterRoutes)
app.use('/thanksgiving', thanksgivingRoutes)
app.use('/newyear', newyearRoutes)


// app.get('/', (req,res) => {
//     res.send('<h1> <a href="home"> Home <h1>')
// })


app.listen(PORT, () => {
    console.log(`lisenting on port: ${PORT}`);
})