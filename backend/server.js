const express = require('express');
const knex = require('knex')(require('./knexfile.js')['development']);
const app = express();
const cors = require('cors');
const port = 8080;

app.use(express.json())

app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }
))

app.get('/', (req, res) => {
  res.send('API is up')
})

app.get('/movies', (req, res) => {
  knex('movies')
    .select('*')
    .then(data => res.status(200).json(data));
})

app.listen(port, () => console.log(`Server is listening on port ${port}`))