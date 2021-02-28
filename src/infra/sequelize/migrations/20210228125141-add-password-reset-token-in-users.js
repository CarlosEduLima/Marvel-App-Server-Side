'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'reset_password_token', {
      type: Sequelize.STRING,
      allowNull: true
    })
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'reset-password-token')
  }
}
