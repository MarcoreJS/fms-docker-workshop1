var songs = require('./data.json');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = {
    name: 'Dockerized Express API',
    port: 3000,
    host: '0.0.0.0'
}

const app = express()

app.use(bodyParser.json());
app.use(cors());

app.get('/songs', (req, res) => {
    res.status(200).send(songs);
});

app.post('/songs', (req, res) => {
    let new_song = {
        name: req.body.name,
        band: req.body.band
    }
    songs.push(new_song);
    res.status(200).send(new_song);
});

app.listen(config.port, config.host, () => {
    console.log(`App running on http://${config.host}:${config.port}`);
});