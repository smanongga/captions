const express = require('express')
const router = express.Router()
const db = require('./db')

router.get('/images/:id', (req, res) => {
  const connection = req.app.get('db')
  db.getImageById(Number(req.params.id), connection)
  .then(data => {
    res.json({result: data})
  })
})

router.get('/captions/:imageId', (req, res) => {
  const connection = req.app.get('db')
  db.getCaptionsById(Number(req.params.imageId), connection)
  .then(data => {
    console.log(data)
    res.json({result: data})
  })
})

module.exports = router