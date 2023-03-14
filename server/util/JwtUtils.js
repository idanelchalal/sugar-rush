const jwt = require('jsonwebtoken')
const config = require('../config')

exports.refreshToken = (token) => {
    return jwt.sign(user, config.RT_STRING, { expiresIn: '30s' })
}

exports.accessToken = (user) => {
    return jwt.sign(user, config.SECRET_STRING, { expiresIn: '20s' })
}
