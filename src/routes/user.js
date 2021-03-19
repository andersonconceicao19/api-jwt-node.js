const routes = require('express').Router()
const userController = require('../app/controllers/UserController')
routes.get('/', userController.get)
routes.post('/', userController.create)

module.exports = routes;