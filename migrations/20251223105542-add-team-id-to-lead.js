'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // إضافة حقل team_id إلى جدول Lead
    await queryInterface.addColumn('Lead', 'team_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Team', 
        key: 'id',
      },
      onUpdate: 'CASCADE',  
      onDelete: 'SET NULL', 
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Lead', 'team_id');
  }
};
