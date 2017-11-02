var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 3000

const user = require('./routes/users')
const secret = require('./routes/secrets')
const query = require('./queries')

app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let loggedIn = false
let currentUser = ''

app.get('/', (req,res) => {
  res.render('index', {
    title: 'Secrets, Secrets are no fun'
  })
})


app.get('/login', (req,res) => {
  res.render('login', {
    title: 'Create Account or Log In'
  })
})

app.post('/:login', (req,res) => {
  query.createUser(req.body)
  .then(function(code){
    // res.send(code)
    res.render('login', {
      code: code
    })
  })
  .catch(err => res.status(500).send(err))
})

app.post('/login/user', (req, res) => {
  const username = req.body.username
  const code = req.body.code
  query.login(username)
  .then(userInfo => {
    if(userInfo[0].code == code){
      loggedIn = true
      currentUser = userInfo[0]
      res.redirect('/userIn')
    }
    else {
      res.sendStatus(401)
    }
  })
  .catch(err => {
    res.sendStatus(500)
  })
})


app.get('/userIn', (req,res) => {
  res.render('userIn', {
    currentUser: currentUser
  })
})

app.get('/addSecret', (req,res) => {
  res.render('addSecret', {
    currentUser: currentUser

  })
})

app.listen(port, (req,res) => {
  console.log('listening!!')
})


module.exports = app
