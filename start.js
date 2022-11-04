//npm install express --save
//Windows: npm i nodemon
//Ubuntu: sudo npm install -g --force nodemon
//Запуск: nodemon start.js

const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {w
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/noscript', (req, res) => {
    res.sendFile(`${__dirname}/noscript.html`);
});

app.get('/registration', (req, res) => {
    app.use(express.static(path.join(__dirname + "/Registrahion")));
    res.sendFile(`${__dirname}/Registrahion/registration_page.html`);
});

app.get('/message', (req, res) => {
    res.sendFile(`${__dirname}/messenger.html`);
});

app.listen(8082, function(){
    console.log('Application listening on port 8082');
});