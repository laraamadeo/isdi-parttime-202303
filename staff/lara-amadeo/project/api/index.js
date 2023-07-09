require('dotenv').config()

const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const { helloAPIHandler, registerUserHandler, authenticateUserHandler } = require('./handlers')

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        const api = express()

        const jsonBodyParser = bodyParser.json()

        api.use(cors())

        api.get('/helloAPI', helloAPIHandler)

        //register user
        api.post('/users', jsonBodyParser, registerUserHandler)

        //authenticate user
        api.post('/users/auth', jsonBodyParser, authenticateUserHandler)

        api.listen(1234, () => console.log('server up'))
    })
    .catch(error => {
        console.log(error)
    })
