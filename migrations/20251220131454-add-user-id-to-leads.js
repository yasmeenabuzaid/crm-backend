'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Lead', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'User',   // اسم جدول users
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Lead', 'user_id');
  }
};