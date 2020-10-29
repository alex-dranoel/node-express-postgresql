const express = require('express');
const router = express.Router();
const {pool} = require('../config');

router.get('/', (request, response) => {
  pool.query('SELECT * FROM books', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
});

router.post('/', (request, response) => {
  console.log(request.body)
  const {author, title} = request.body
  console.log(author);
  console.log(title);

  pool.query(
    'INSERT INTO books (author, title) VALUES ($1, $2)',
    [author, title],
    (error) => {
      if (error) {
        throw error
      }
      response.status(201).json({status: 'success', message: 'Book added.'})
    },
  )
});

module.exports = router;