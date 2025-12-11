const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Team = sequelize.define("Team", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  leader_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  team_type: {
    type: DataTypes.STRING,
    defaultValue: "general",
  },
  status: {
    type: DataTypes.ENUM("active", "inactive"),
    defaultValue: "active",
  },
});

module.exports = Team;
