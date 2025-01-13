const dotenv = require('dotenv');
dotenv.config()
const express = require('express')
const cors = require('cors')
const app = express()
const connectToDb = require('./db/db.js')
const userRoutes = require('./user.routes.js/')

connectToDb()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/' , (req, res) => {
    res.send("hello world")
})

app.use("/user", userRoutes)

module.exports = app;