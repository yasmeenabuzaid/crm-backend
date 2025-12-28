// commands/teamUserCommand.js
const { TeamUser } = require("../models");

const createRecord = async (recordData) => {
  try {
     console.log("TeamUser model:", TeamUser);
    const teamUser = await TeamUser.create(recordData);

    return teamUser;
  } catch (error) {
  console.error("❌ TeamUser create error:", error);
  throw error;
}

};

const deletemembers = async (teamId, userIds) => {
  try{
    const deletedRows = await  TeamUser.destroy({
      where: {
         team_id: teamId, 
        user_id: userIds, 
      },
    });
     return deletedRows;
  }catch (error){
     console.error(" Error deleting members:", error);
    throw error;
  }

}

module.exports = {
  createRecord,
  deletemembers
};
