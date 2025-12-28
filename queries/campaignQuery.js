const { Campaign, Lead } = require("../models");


const getRecords = async (filters = {}, exclude = [], columns = []) => {


  try {
    let attributes = { exclude: exclude };
    // لو في أعمدة محددة عايزينها، نضيفها لل attributes
    if (columns?.length) {
        // لو columns مش فاضية
        attributes.includes = columns;
        // نضيف الأعمدة اللي عايزينها لل attributes
    }
   // بنستخدم Campaign Model عشان نستعلم عن البيانات
    const resp = await Campaign.findAll({
    
      where: { ...filters },
      // بنحدد ال attributes اللي عايزينها
      //معنى ال ...
      // بنستخدمه عشان ننشر محتويات ال filters جوه كائن جديد
      //لو ال filters كان { id: 3, name: 'Test' }
      // لما نكتب { ...filters } ده هيبقى زي كتابة { id: 3, name: 'Test' }
      // ده بيساعدنا نضمن اننا مش بنغير ال filters الأصلية
      attributes: attributes,
      //    بنطبق ال filters على الاستعلام
    });
    console.log("Campaign Records Retrieved:", resp);
    // نرجع النتيجة
    return resp;
  } catch (error) {
    return { error: error };
  }
};


const getRecord = async (filters = {}, exclude = [], columns = []) => {
  try {
    let attributes = { exclude: exclude };
    if (columns?.length) {
      attributes.includes = columns;
    }

    const result = await Campaign.findOne({
      where: { ...filters },
      attributes: attributes,
    });
    return result;
  } catch (error) {
    return { error: error };
  }
};


const getCampaignWithLeads = async (filters) => {
  try {
    const result = await Campaign.findOne({
      where: filters,
      include: [
        {
          model: Lead,
          through: { attributes: [] },
        },
      ],
    });

    return result;
  } catch (error) {
    return { error: error };
  }
};

module.exports = {
  getRecords,
  getRecord,
  getCampaignWithLeads,
};
