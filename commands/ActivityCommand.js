const { Activity } = require("../models"); 

const logActivity = async (activityData) => {
  try {
    const activity = await Activity.create(activityData);
    return activity;
  } catch (error) {
    console.error("Error logging activity:", error);
    throw new Error("Error logging activity");
  }
};

module.exports = {
  logActivity,
};
