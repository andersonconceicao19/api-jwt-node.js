const routes = require('express').Router()

routes.get('/', (request, response) => {
    return response.json({
        message: 'anderson foi '
    })
})

module.exports = routes;