const { DataTypes } = require("sequelize");
const sequelize  =require("../config/database");

const CampaignLead = sequelize.define("CampaignLead", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  joined_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = CampaignLead;
