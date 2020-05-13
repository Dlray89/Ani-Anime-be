const express = require("express")

const router = express.Router()

const animeDB = require("./character-model")

router.get("/", (req,res) => {
    animeDB
    .find().then(character => {
        res.status(200).json(character)
    }).catch(error => {
        res.status(500).json({ errorMessage:`${error} could not retrive data`})
    })
})


router.get("/:id", (req,res) => {
    const { id } = req.params

    animeDB
    .findById(id)
    .then(character => {
        res.status(200).json(character)
    })
    .catch(error => {
        res.status(500).json({errorMesage: `${error} sorry could not find character`})
    })
})

router.post("/", (req,res) => {
    const newCharacter = req.body
    animeDB
    .add(newCharacter)
    .then(newCharacter => {
        res.status(200).json(newCharacter)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} sorry could not add character`})
    })
} )

router.put("/", (req,res) => {
    const { id } = req.params
    const updateCharacter = req.body
    animeDB
    .update(id, updateCharacter)
    .then( updateCharacter => {
        res.status(200).json(updateCharacter)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} sorry, we could not update your character`})
    })
})

router.delete("/", (req,res) => {
    const { id } = req.params
    animeDB
    .remove(id)
    .then(deleteCharacter => {
        res.status(200).json(deleteCharacter)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} could not remove your character, Try Again!`})
    })
})

module.exports = router