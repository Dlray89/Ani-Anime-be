const express = require("express")

const router = express.Router()

const animeDB = require("./abilities-model")

router.get("/", (req,res) => {
    animeDB
    .find().then(ablilty => {
        res.status(200).json(ablilty)
    }).catch(error => {
        res.status(500).json({ errorMessage:`${error} could not retrive data`})
    })
})


router.get("/:id", (req,res) => {
    const { id } = req.params

    animeDB
    .findById(id)
    .then(ablilty => {
        res.status(200).json(ablilty)
    })
    .catch(error => {
        res.status(500).json({errorMesage: `${error} sorry could not find ablilty`})
    })
})

router.post("/", (req,res) => {
    const newAbility = req.body
    animeDB
    .add(newAbility)
    .then(newAbility => {
        res.status(200).json(newAbility)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} sorry could not add ablilty`})
    })
} )

router.put("/", (req,res) => {
    const { id } = req.params
    const updateAbilities = req.body
    animeDB
    .update(id, updateAbilities)
    .then( updateAbilities => {
        res.status(200).json(updateAbilities)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} sorry, we could not update your ablilty`})
    })
})

router.delete("/", (req,res) => {
    const { id } = req.params
    animeDB
    .remove(id)
    .then(deleteAbilities => {
        res.status(200).json(deleteAbilities)
    })
    .catch(error => {
        res.status(500).json({errorMessage: `${error} could not remove your ablilty, Try Again!`})
    })
})

module.exports = router