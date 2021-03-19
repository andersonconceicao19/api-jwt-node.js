const _context = require('../models')
class UserController {
    static async get(request, response, next) {

        const users = await _context.User.findAll()
        console.log(users);
        return response.status(200).json({
            data: users
        })
    }
    static async create(request, response, next) {
        return response.status(201).json({
            data: "criado"
        })
    }


}

module.exports = UserController;