// var events = require('events');


var form = document.getElementById('createAcct')

form.addEventListener('submit', function(event){
  event.preventDefault()
  console.log(event)
  console.log('clicked')
})
