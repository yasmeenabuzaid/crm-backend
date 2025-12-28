const { Activity } = require("../models");

const getActivity = async (filters = {}, columns = ["id", "activity_type", "details", "created_at", "client_id"]) => {
  try {
    const resp = await Activity.findAll({
      where: filters,
      attributes: columns,
    });
    return resp;
  } catch (error) {
    return { error };
  }
}


module.exports = {
    getActivity,
};
