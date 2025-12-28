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
      allowNull: true,
      field: "user_id", 
    },
      // إضافة مفتاح خارجي للفريق
  team_id: {
    type: DataTypes.INTEGER,
    allowNull: true, 
    references: {
      model: 'Team',  // اسم جدول الفرق
      key: 'id'       // المفتاح الأساسي في جدول الفرق
    },
    field: 'team_id'
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

