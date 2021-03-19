const routes = require('express').Router()
const userController = require('../app/controllers/UserController')
routes.get('/', userController.get)
routes.get('/token', userController.getUserByToken)
routes.post('/', userController.create)
routes.post('/login', userController.login)

module.exports = routes;