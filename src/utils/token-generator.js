const jwt = require('jsonwebtoken')
const MissingParamError = require('../errors/missing-param-error')
module.exports = {
  async  generate (secret, id, expires) {
    if (!secret) {
      throw new MissingParamError('secret')
    }
    if (!expires) {
      throw new MissingParamError('expires')
    }
    if (!id) {
      throw new MissingParamError('id')
    }
    return jwt.sign({ _id: id }, secret, { expiresIn: expires })
  }
}
