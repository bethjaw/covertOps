const db = require('./connections')


function createUser(user) {
  const code = generateRandomString()

  user.code = code
  return db('users').insert(user).returning(['id', 'code'])
  alert('id', 'code')
}

function generateRandomString(){
  var code = ''
  var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i=0; i < 5; i++){
    code += char.charAt(Math.floor(Math.random() * char.length))
  }
  return code
}

function getUserById(id){
  return db.select().from('users').where('id', id)
}

function createSecret(secret){
  return db('secrets').insert(secret)
}

function getSecrets(){
  return db.select().from('secrets')
}

function getUsers(){
  return db.select().from('users')
}

function remove(id){
  return db.delete().from('secrets').where('id', id)
}

module.exports = {
  getUserById: getUserById,
  createSecret: createSecret,
  getSecrets: getSecrets,
  remove: remove,
  createUser: createUser,
  getUsers: getUsers
}
