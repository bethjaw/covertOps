
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1,
          email: 'beth@email.com',
          code:'abcd'
        },
        {id: 2,
          email: 'makayla@email.com',
          code: 'efgh'}
      ]);
    });
};
