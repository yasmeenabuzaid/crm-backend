// commands/teamUserCommand.js
const { TeamUser } = require("../models");

const createRecord = async (recordData) => {
  try {
     console.log("TeamUser model:", TeamUser);
    const teamUser = await TeamUser.create(recordData); // إضافة العضو إلى جدول TeamUser

    return teamUser;
  } catch (error) {
  console.error("❌ TeamUser create error:", error);
  throw error;
}

};

module.exports = {
  createRecord,
};
