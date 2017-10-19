const express = require('express')
const router = express.Router()
const queries = require('../queries')


router.post('/', (req, res) => {
  queries.createUser(req.body)
  .then(function(user){
    res.json(user)
  })
})

router.get('/', (req,res) => {
  queries.getUsers()
  .then(function(user){
    res.json(user)
  })
})


router.get('/:id', (req, res) => {
  queries.getUserById(req.params.id)
  .then(function(user){
    res.json(user)
  })
})



module.exports = router
