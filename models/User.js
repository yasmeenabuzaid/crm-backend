
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  // صلاحيات على مستوى النظام
  system_role: {
    type: DataTypes.ENUM("admin", "manager", "employee", "viewer"),
    defaultValue: "employee",
  },

  // حالة المستخدم
  status: {
    type: DataTypes.ENUM("active", "inactive"),
    defaultValue: "active",
  },
});

module.exports ={ User};


