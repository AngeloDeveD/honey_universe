//npm install express --save
//Windows: npm i nodemon
//Ubuntu: sudo npm install -g --force nodemon
//Запуск: nodemon start.js

const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/message', (req, res) => {
    res.sendFile(`${__dirname}/messenger.html`);
});

app.get('/nonejs', (req, res) => {
    res.sendFile(`${__dirname}/noscript.html`);
});

app.get('/', (req, res) => {w
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(8082, () => {
    console.log('Application listening on port 8082');
});