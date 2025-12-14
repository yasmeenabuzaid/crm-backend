"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Team", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      leader_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      team_type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "general",
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        allowNull: false,
        defaultValue: "active",
      },
       
      createdAt: {
        field: "created_at",
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        field: "updated_at",
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      deletedAt: {
        field: "deleted_at",
        type: Sequelize.DATE,
        defaultValue: null,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Team");
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Team_status";');
  },
};
