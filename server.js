const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index');
});
app.get('/data', (req, res) => {
    fs.readFile('data.json', 'uft-8', (err, data) => {
        res.json(JSON.parse(data));
    });
});

app.listen(4242, () => {
    console.log('server up and running on 4242');
});
