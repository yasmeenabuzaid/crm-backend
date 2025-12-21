// queries/teamQuery.js
const { Team } = require("../models");
const { TeamUser } = require("../models");
const { User } = require("../models");

// دالة لجلب جميع الفرق بناءً على الفلاتر
const getRecords = async (filters = {}, exclude = [], columns = []) => {
  try {
    let attributes = { exclude: exclude };
    // لو في أعمدة محددة عايزينها، نضيفها لل attributes
    if (columns?.length) {
      attributes.includes = columns;
    }

    // بنستخدم Team Model عشان نستعلم عن البيانات
    const resp = await Team.findAll({
      where: { ...filters },  // نطبق الفلاتر (شروط WHERE)
      attributes: attributes, // نحدد الأعمدة اللي نرجعها
    });

    return resp;
  } catch (error) {
    return { error: error };
  }
};

// دالة لجلب فريق واحد بناءً على الفلاتر
const getRecord = async (filters = {}, exclude = [], columns = []) => {
  try {
    let attributes = { exclude: exclude };
    if (columns?.length) {
      attributes.includes = columns;
    }

    const result = await Team.findOne({
      where: { ...filters }, 
      attributes: attributes, 
    });
    
    return result;
  } catch (error) {
    return { error: error };
  }
};


const getMembers = async (teamId, columns = ["user_id"]) => {
  try {
    const res = await TeamUser.findAll({
      where: {
        team_id: teamId,
        deleted_at: null
      },
        include: [
        {
          model: User,
          attributes: ["id", "name"]
        }
      ],
      attributes: columns
    });
    return res;
  } catch (error) {
    throw error;
  }
};




module.exports = {
  getRecords,
  getRecord,
  getMembers
};
