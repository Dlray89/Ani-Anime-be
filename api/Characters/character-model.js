const animeDB = require("../../knex.config/db.Config")

const mappers = require("../../data/helpers/mappers")

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find(){
 return animeDB("characters")
}

function findById(id){
    return animeDB("characters").where({ id })
    .first()
}

function add(characters){
    return animeDB("characters").insert(characters, "id").then(ids => ({ id: ids[0] }))
}

function update(id, changes){
    return animeDB("characters").where("id", id).update(changes).then(count => (count > 0 ? get(id) : null))
}

function remove(){
    return animeDB("characters").where("id", id).del()
}