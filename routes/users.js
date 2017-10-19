const express = require('express')
const router = express.Router()
const queries = require('../queries')


router.post('')

router.get('/:id', (req, res) => {
  queries.getUserById(req.params.id)
  .then(function(user){
    res.json(user)
  })
})



module.exports = router
