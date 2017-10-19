const express = require('express')
const router = express.Router()
const queries = require('../queries')

router.get('/', (req, res) => {
  queries.getSecrets()
  .then(function(secrets){
    res.json(secrets)
  })
})

router.post('/', (req,res) => {
  queries.createSecret(req.body)
  .then(function(secret){
    res.json(secret)
  })
})

router.delete('/', (req, res) => {
  queries.remove(req.body.id)
  .then(function(secret){
    res.send('deleted')
  })
})


module.exports = router
