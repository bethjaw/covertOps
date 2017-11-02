
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'bethjaw',
          email: 'beth@email.com',
          code:'abcd'
        },
        {
          username: 'makayla',
          email: 'makayla@email.com',
          code: 'efgh'
        }
      ]);
    });
};
