'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Campaign', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: true, 
      references: {
        model: 'User', 
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Campaign', 'userId');
  }
};