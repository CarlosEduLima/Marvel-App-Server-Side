const validator = require('validator')

const isValid = (email) => {
  return validator.isEmail(email)
}
module.exports = isValid()
