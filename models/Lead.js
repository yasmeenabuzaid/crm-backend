const { DataTypes } = require("sequelize");
const sequelize  =require("../config/database");

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
   userId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
      model:"User",
      key:"id"
    },
     onDelete: "CASCADE",  // حذف الـ Lead إذا تم حذف المستخدم
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
});



module.exports = Lead;
