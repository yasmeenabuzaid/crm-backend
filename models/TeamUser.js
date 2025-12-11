const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TeamUser = sequelize.define("TeamUser", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  role_in_team: {
    type: DataTypes.ENUM("leader", "member", "trainee"),
    defaultValue: "member",
  },
  joined_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = TeamUser;
