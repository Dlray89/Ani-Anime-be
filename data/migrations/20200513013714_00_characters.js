
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("characters", tbl => {
      tbl
      .increments()

      tbl
      .string("name", 128)
      .notNullable()

      tbl
      .text("charactersDetail")
      .notNullable()
  })

  .createTable('ablilites', tbl => {
      tbl.increments()
      tbl.string("ablilties_name", 128)
      tbl.integer('character_id')
      //forces integer to be positive
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('characters')
      

      
  })


};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('characters')
  .dropTableIfExists('abilities')
};
