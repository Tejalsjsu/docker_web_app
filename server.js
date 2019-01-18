'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const bodyParser = require("body-parser");

// App
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

let number = 0;

app.get('/value',(req, res) =>{
    res.send('The original value is ' +String(number));
})

app.post('/increment',(req, res) =>{
    let incrementValue = parseFloat(req.body.incrementBy);
    if (!isNaN(incrementValue)){
        number += incrementValue;
    }
    res.send('The incremented value is ' +String(number));
})


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);