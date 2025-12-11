const {Lead } = require("../models");

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
      const deletedRecords = await Lead.destroy({
        where: filter,
      });
      return deletedRecords;
    } catch (error) {
      throw new Error(error);
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
};