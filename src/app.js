const express = require('express')

const app = express();
const port = 5000;
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json());

app.get('/movies', function(req, res) {
  knex
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.get('/actors', function(req, res) {
  knex
    .select('*')
    .from('actors')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});