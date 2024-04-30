const express = require('express')
const mongoose = require('mongoose')

const app = express()
//connecting to db and initiating app
const DBURI = 'mongodb://localhost/Book'
mongoose.connect(DBURI)
    .then((result) => {
        console.log('Connected to DB')
        app.listen(3000, () => {
            console.log('Listening on port 3000')
        })
    })
    .catch((err) => {
        comsole.log(err)
    })

//using routes


