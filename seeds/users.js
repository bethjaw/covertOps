
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { email: 'beth@email.com',
          code:'abcd'
        },
        { email: 'makayla@email.com',
          code: 'efgh'}
      ]);
    });
};

// id: 1,
// id: 2,
