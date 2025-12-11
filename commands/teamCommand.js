// commands/teamCommand.js
const { Team } = require("../models");

const createRecord = async (recordData) => {
  try {
    const team = await Team.create(recordData);
    return team;
  } catch (error) {
    return { error: error };
  }
};

const updateRecord = async (filter, data) => {
  try {
    const updated = await Team.update(data, {
      where: { ...filter },
    });
    return updated;
  } catch (error) {
    throw new Error(error); 
  }
};


const delRecord = async (filter) => {
  try {
    const deletedRecords = await Team.destroy({
      where: filter,
    });
    return deletedRecords;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createRecord,
  updateRecord,
  delRecord,
};
