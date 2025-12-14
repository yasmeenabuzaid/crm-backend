const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Campaign = sequelize.define(
  "Campaign",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM("pending", "Qualified", "Rejected", "New"),
      defaultValue: "pending",
    },
    description: DataTypes.TEXT,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    budget: DataTypes.FLOAT,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "userId", // ⭐ لأن العمود camelCase في DB
    },
  },
  {
    tableName: "Campaign",
    timestamps: true,
    underscored: true,
  }
);

module.exports = Campaign;
