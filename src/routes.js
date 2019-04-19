const express = require('express')
const routes = express.Router()
const getCepController = require('./controllers/getCepController')

routes.get('/getCep/:numCep', getCepController.gepCep)

module.exports = routes