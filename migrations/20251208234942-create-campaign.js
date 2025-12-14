"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Campaign", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM("pending", "Qualified", "Rejected", "New"),
        allowNull: false,
        defaultValue: "pending",
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      budget: {
        type: Sequelize.FLOAT,
        allowNull: true,
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
    await queryInterface.dropTable("Campaign");
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Campaign_status";');
  },
};
