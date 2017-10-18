
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('secrets').del()
    .then(function () {
      // Inserts seed entries
      return knex('secrets').insert([
        {id: 1,
          secret: 'Beth loves french fries'
        },
        {id: 2,
          secret: 'Makayla does not get scared'
        },
        {id: 3,
          secret: 'We love puzzling with wine'
        }
      ]);
    });
};
