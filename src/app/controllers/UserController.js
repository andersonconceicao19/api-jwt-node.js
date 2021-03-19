class UserController {
    static async get(request, response, next) {
        return response.status(200).json({
            data: "hi"
        })
    }
    static async create(request, response, next) {
        return response.status(201).json({
            data: "criado"
        })
    }


}

module.exports = UserController;