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
 return animeDB("abilities")
}

function findById(id){
    return animeDB("abilities").where({ id })
    .first()
}

function add(abilities){
    return animeDB("abilities").insert(abilities, "id").then(ids => ({ id: ids[0] }))
}

function update(id, changes){
    return animeDB("abilities").where("id", id).update(changes).then(count => (count > 0 ? get(id) : null))
}

function remove(){
    return animeDB("abilities").where("id", id).del()
}