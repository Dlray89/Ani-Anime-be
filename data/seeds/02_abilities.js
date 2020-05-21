
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ablilites').del()
    .then(function () {
      // Inserts seed entries
      return knex('ablilites').insert([
        {id: 1, ablilties_name: 'Black Whirlwind', character_id:1},
        {id: 2, ablilties_name: 'Wind Binding', character_id:2},
        {id: 3, ablilties_name: 'Dimentional Slash', character_id:3}
      ]);
    });
};
