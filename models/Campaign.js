const { DataTypes } = require("sequelize");
const sequelize  =require("../config/database");


const Campaign = sequelize.define("Campaign" , {
   id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
   },
   name: {
    type:DataTypes.STRING,
   },
   status: {
    type: DataTypes.ENUM("pending", "Qualified", "Rejected", "New"),
    defaultValue :"pending"
   }, 
   description:{
    type:DataTypes.TEXT
   },
   start_date:{
    type: DataTypes.DATE,
   },
   end_date:{
    type: DataTypes.DATE,
   },
   budget: {
    type: DataTypes.FLOAT,
  },
  userId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
      model:"User",
      key:"id"
    }
  }
});

module.exports = Campaign;