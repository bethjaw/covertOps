const db = require('./connections')

function getUserById(id){
  return db.select().from('users').where('id', id)
}

function createSecret(secret){
  return db('secrets').insert(secret)
}

function getSecrets(){
  return db.select().from('secrets')
}

function remove(id){
  return db.delete().from('secrets').where('id', id)
}

module.exports = {
  getUserById: getUserById,
  createSecret: createSecret,
  getSecrets: getSecrets,
  remove: remove
}
