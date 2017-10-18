var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = 3000


app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.listen(port, (req,res) => {
  console.log('listening!!')
})
