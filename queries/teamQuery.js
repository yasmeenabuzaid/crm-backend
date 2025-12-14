// queries/teamQuery.js
const { Team , User} = require("../models");

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
      where: { ...filters },  // نطبق الفلاتر (شروط WHERE)
      attributes: attributes, // نحدد الأعمدة اللي نرجعها
    });
    
    return result;
  } catch (error) {
    return { error: error };
  }
};





// دالة لجلب القادة بناءً على الفريق
const getLeaders = async (teamId) => {
  try {
    // استعلام لجلب القادة فقط من جدول TeamUser
    const leaders = await TeamUser.findAll({
      where: {
        team_id: teamId,  
        role_in_team: "leader", 
      },
      include: [
        {
          model: User,  
          as: "user",  
          attributes: ["id", "name"], 
        },
        {
          model: Team,  
          as: "team",
          attributes: ["id", "name"],  
        },
      ],
    });

    return leaders; 
  } catch (error) {
    console.error("Error fetching leaders:", error);
    return { error: error.message };
  }
};
module.exports = {
  getRecords,
  getRecord,
  getLeaders,
};
