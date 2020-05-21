
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {id: 1, name: 'Asta', charactersDetail: "is an orphan left under the care of a church in the village of Hage. He is the wielder of a five-leaf clover grimoire and is a 3rd Class Junior Magic Knight of the Clover Kingdom's Black Bull and Royal Knights squads."},

        {id: 2, name: 'Yuno', charactersDetail:" is an orphan who was left under the care of a church in Hage after the downfall of House Grinberryall, the former royal family of the Spade Kingdom. He wields a four-leaf clover grimoire and is a 5th Class Intermediate Magic Knight of the Clover Kingdom's Golden Dawn and Royal Knights squads"},
       
      ]);
    });
};
