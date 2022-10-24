const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/messenger.html`);
});

app.get('/nonejs', (req, res) => {
    res.sendFile(`${__dirname}/noscript.html`);
});

app.listen(8082, () => {
    console.log('Application listening on port 8082');
});