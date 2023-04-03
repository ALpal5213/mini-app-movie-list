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

app.delete('/movies/:id', (req, res) => {
  knex('movies')
    .where("id", req.params.id)
    .del()
    .then(data => res.status(200).send(`Deleted movie: ${req.params.id}`))
})

app.post('/movies', (req, res) => {
  let movie = req.body;
  console.log("movie: ", movie);

  knex.insert(movie)
    .into('movies')
    .then(data => res.status(201).send(`Inserted ${movie.title}`))
})

app.listen(port, () => console.log(`Server is listening on port ${port}`))