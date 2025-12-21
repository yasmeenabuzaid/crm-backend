const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TeamUser = sequelize.define(
  "TeamUser",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role_in_team: {
      type: DataTypes.ENUM("leader", "member", "trainee"),
      defaultValue: "member",
    },
    joined_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "TeamUser", 
    timestamps: true,
    paranoid: true,
  underscored: true, 
   }
);

module.exports = TeamUser;
