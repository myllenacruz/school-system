'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Classes', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
    })
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('Classes', 'deletedAt')
  }
}
