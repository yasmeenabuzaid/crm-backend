"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("CampaignLead", "campaign_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Campaign",
        key: "id",
      },
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("CampaignLead", "lead_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "Lead",
        key: "id",
      },
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("CampaignLead", "campaign_id");
    await queryInterface.removeColumn("CampaignLead", "lead_id");
  },
};
