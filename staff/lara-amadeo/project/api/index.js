require('dotenv').config()

const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')

const { helloAPIHandler } = require('./handlers')

const api = express()

const jsonBodyParser = bodyParser.json()

api.get('/helloAPI', helloAPIHandler)

api.post('/users', jsonBodyParser, registerUserHandler)