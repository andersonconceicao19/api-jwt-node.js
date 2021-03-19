const express = require('express')
const routes = require('./routes')

class AppControler {
    constructor() {
        this.express = express();
        this.routes();
    }
    routes() {
        routes(this.express)
    }
}

module.exports = new AppControler().express;