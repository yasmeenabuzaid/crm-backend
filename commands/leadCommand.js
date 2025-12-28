const { Lead, Activity } = require("../models");

const createRecord = async (recordData) =>{
    try{
     const  data = await Lead.create(recordData);
     return data;
    }catch (error) {
        return { error : error};
    }
};



const updateRecord = async ( filter , data )=>{
try{
  const  update = await Lead.update( data , {
    where: { ...filter},
  });
  return update;
}catch (error) {
 throw new Error(error);
}
};



const delRecord = async (filter) => {
  try {
    // 1. تحقق من وجود سجلات مرتبطة بالعميل في جدول Activity باستخدام client_id
    const activityRecords = await Activity.findAll({ where: { client_id: filter.id } });

    // 2. إذا كانت هناك سجلات مرتبطة، قم بحذفها أولاً
    if (activityRecords.length > 0) {
      await Activity.destroy({ where: { client_id: filter.id } });
    }

    // 3. حذف العميل من جدول Lead
    const deletedRecords = await Lead.destroy({ where: filter });

    return { activityRecordsDeleted: activityRecords.length, leadDeleted: deletedRecords };
  } catch (error) {
    throw new Error(error);
  }
};

const updateleadwithteam = async (req, res) => {
  const { leadIds, teamId } = req.body;
  try {
    await Lead.update({ team_id: teamId }, { where: { id: leadIds } });
    res.status(200).json({ message: "Leads assigned successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



  
// =====================soft Delete ==================================
// const delRecord = async (filter) => {
//   try {
//     // تحديث السجل بدلاً من حذفه الفعلي
//     const deletedRecords = await Campaign.update(
//        // تغيير القيمة لتحديد السجل كـ "محذوف"
//       { is_deleted: true },
//       // الفلتر لتحديد السجل الذي سيتم تحديثه
//       {where: filter},
//     );
//     return deletedRecords;
//   } catch (error) {
//     throw new Error(error);
//   }
// };


module.exports ={
    createRecord,
    updateRecord,
    delRecord,
    updateleadwithteam,
};