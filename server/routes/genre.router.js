const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = 'SELECT * FROM genres'
  pool.query(query)
    .then(results => {
      res.send(results.rows);
    })
    .catch(err => {
      console.log('err in GET /genre', err);
      res.sendStatus(500);
    })
  
});

module.exports = router;