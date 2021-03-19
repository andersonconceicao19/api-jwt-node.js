const _context = require('../models')
const jwt = require('jsonwebtoken')
class UserController {
    static async get(request, response, next) {
        const users = await _context.User.findAll()
        if (!!users) return response.status(404).json({
            message: 'not found users'
        })
        return response.status(200).json({
            data: users
        })
    }
    static async create(request, response, next) {
        const user = request.body
        const createUser = await _context.User.create(user)
        return response.status(201).json({
            data: createUser
        })
    }

    static async login(request, response, next) {
        const user = request.body
        const token = jwt.sign({ user }, 'mys_secret_key')
        return response.status(200).json({
            token
        })
    }
    static async getUserByToken(request, response, next) {
        const { authorization } = request.headers
        const token = authorization.split(' ')[1]
        const userDoToken = jwt.decode(token)
        return response.json(userDoToken)
    }

}

module.exports = UserController;