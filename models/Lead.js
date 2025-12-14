const { DataTypes } = require("sequelize");
const sequelize  =require("../config/database");
const { User } = require("./User");

const Lead = sequelize.define("Lead", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  company: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "New"
  },
  notes: {
    type: DataTypes.TEXT,
  },
     userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "userId", // ⭐ لأن العمود camelCase في DB
    },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
},
  {
    tableName: "Lead",
    timestamps: true,
    underscored: true,
  }
);



module.exports = Lead;
