
exports.up = function(knex) {
  return knex.schema.createTable("characters", function(characters) {
      characters
      .increments()

      characters
      .string("name", 128)
      .notNullable()

      characters
      .text("charactersDetail")
      .notNullable()




  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("characters")
};
