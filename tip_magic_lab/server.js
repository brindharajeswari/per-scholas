const express = require('express')
const app = express()
const PORT = 8080

//greetings
app.get('/greeting', (req, res) => {
    // console.log(req.params)
    // console.log(req.query)
    res.send('Hello, stranger');
});

app.get('/greeting/:name',(req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send('Whats up ' + req.params.name + ' Its so great to see you!');
});



//Tip calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params)
    console.log(req.query)
    res.send('your tip is: ' + (req.params.total * (req.params.tipPercentage/100)));
});


//Magic 8 ball
const responses = ["It is certain", 
                   "It is decidedly so", 
                   "Without a doubt", 
                   "Yes definitely",
                   "You may rely on it", 
                   "As I see it yes", 
                   "Most likely", 
                   "Outlook good",
                   "Yes", 
                   "Signs point to yes", 
                   "Reply hazy try again",
                   "Ask again later",
                   "Better not tell you now", 
                   "Cannot predict now",
                   "Concentrate and ask again",
                   "Don't count on it", 
                   "My reply is no", 
                   "My sources say no",
                   "Outlook not so good", 
                   "Very doubtful"]


app.get('/magic/:question', (req, res) => {
    const randomResponse = responses[Math.floor(Math.random()*responses.length)]
      res.send('Your question: ' + req.params.question + `<h1>${randomResponse}</h1>`);
    });

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT)
});

