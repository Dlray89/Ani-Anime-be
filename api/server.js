const morgan = require("morgan")
const helmet = require("helmet")
const express = require("express")
const cors = require("cors")


//connect server to express
const server = express()

//set up routers
// const charactersRouter = require("./Characters/character-routes")

//middlewear here
server.get(helmet())
server.use(morgan("dev"))
server.use(cors())
server.use(express.json())

//set router endpoint and connect to routers up too
// server.use("/api/characters")

server.get("/api/testing", (req,res) => {
    res.status(200).json({message: ` Your server is up and running`})
})

module.exports = server