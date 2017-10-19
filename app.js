var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

const user = require('./routes/users')
const secret = require('./routes/secrets')

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/users', user)
app.use('/api/secrets', secret)

app.get('/', (req,res) => {
  res.render('index', {
    title: 'Secrets, Secrets are no fun'
  })
})

app.get('/', (req,res) => {
  res.render('index', {
    title: 'Secrets, Secrets are no fun'
  })
})

app.get('/login.hbs', (req,res) => {
  res.render('login', {
    title: 'Create Account or Log In'
  })
})

app.get('/userIn.hbs', (req,res) => {
  res.render('userIn')
})

app.get('/addSecret.hbs', (req,res) => {
  res.render('addSecret')
})



app.listen(port, (req,res) => {
  console.log('listening!!')
})


module.exports = app
