const express = require('express')
const app = express()

const PORT = 8080


app.get('/',(req, res) => {   
     res.send(`<h1> 99 Bugs in the code</h1>
     <h2> <a href="98"> take on down, patch it around </h2>`);
})   

app.get('/:number',(req, res) =>{
    //res.send('Number of bugs in the code ' + req.params.number)
    let number_of_bugs = req.params.number
    if(number_of_bugs > 0) {
        res.send(`<h1>${number_of_bugs} little bugs in the code</h1>
                  <h2> <a href="/${number_of_bugs -1}">
                    take on down, patch it around </a> </h2>` );
    } else {
        res.send(`<h1>${number_of_bugs} bugs in the code<h1>
                  <h2> <a href="/"> start over</a> </h2>`);
    }

})


app.listen(PORT, () => {
    console.log('lisenting on port: ', PORT)
})