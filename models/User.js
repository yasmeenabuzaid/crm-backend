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

  system_role: {
    type: DataTypes.ENUM("admin", "manager", "employee", "viewer"),
    defaultValue: "employee",
  },

  status: {
    type: DataTypes.ENUM("active", "inactive"),
    defaultValue: "active",
  },
}, {
  tableName: 'User',  // تأكد من اسم الجدول
  timestamps: true,    // تأكد من تمكين timestamps
  underscored: true,   // تأكد من أنه سيتم استخدام snake_case
});

module.exports = { User };
