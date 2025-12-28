const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
// const { Lead } = require("./Lead"); // إذا كنت بحاجة إلى الربط بين الأنشطة والعملاء

const Activity = sequelize.define("Activity", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  activity_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, 
  },
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Lead',  
      key: 'id',  
    },
    field: 'client_id',
  },
},
{
  tableName: "Activity",  // اسم الجدول
  timestamps: true,
  underscored: true,  // ليتماشى مع التنسيق الذي تستخدمه في بقية الجداول
});

module.exports = Activity;
