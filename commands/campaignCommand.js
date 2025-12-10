const { Campaign } = require("../models");

// دالة لإنشاء سجل جديد في جدول Campaign
const createRecord = async (recordData) => {
    // بنستخدم async عشان نقدر نستخدم await جواها
  try {
    // بنستخدم Campaign Model عشان ننشئ سجل جديد
    const data = await Campaign.create(recordData);
    return data;
  } catch (error) {
    return { error: error };
  }
};

// return { error: error }: لا يوقف تنفيذ الكود؛ ببساطة يُعيد الخطأ في كائن ويستمر الكود.
// throw new Error(error): يوقف تنفيذ الدالة ويُمكِّن الكود الخارجي من التعامل مع الخطأ.
const updateRecord = async (filter, data) => {
  try {
    const update = await Campaign.update(data, {
      where: { ...filter },
    });
    return update;
  } catch (error) {
    throw new Error(error);
  }
};


const delRecord = async (filter) => {
  try {
    const deletedRecords = await Campaign.destroy({
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
