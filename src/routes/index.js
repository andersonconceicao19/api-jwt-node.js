const express = require('express')
const user = require('./user')
module.exports = app => {
    app.use(express.json())
    app.use('/api/user', user)
}