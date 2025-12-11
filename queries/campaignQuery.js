const { Campaign, Lead } = require("../models");

// بنستخدم Destructuring عشان نجيب Models اللي هنشتغل عليها
// هنا جايبن Campaign و Lead من models/index.js
// Models دي بتسمح لنا نتعامل مع الجداول في DB كأنها كائنات في الكود
// بدل ما نكتب SQL مباشرة
// ده بيسهل علينا كتابة الكود ويخليه أكثر وضوحًا وقابلية للصيانة

//--------------------------------------------
//معنى destructuring:

//بدون Destructuring:
//const models = require("../models");
//const Campaign = models.Campaign;
//const Lead = models.Lead;

//مع Destructuring:
//const { Campaign, Lead } = require("../models");
//ليش نحط require داخل متغير؟
//عشان نقدر نستخدم القيمة اللي يرجعها require بعدين في الكود


//--------------------------------------------
//دالة لجلب سجلات من جدول Campaign


// filters
// شروط البحث (WHERE)

// exclude
// أعمدة بدنا نستبعدها من النتيجة

// columns
// أعمدة محددة بدنا نرجعها فقط
const getRecords = async (filters = {}, exclude = [], columns = []) => {
//نستخدم async عشان نقدر نستخدم await جواها
// await بتوقف تنفيذ الكود لحد ما العملية اللي بعدها تخلص
// فلو العملية بتاخد وقت (زي استعلام DB)، الكود مش هيكمل لحد ما يخلص
// ده بيساعدنا نتعامل مع العمليات اللي بتاخد وقت بطريقة أسهل
//وال filters, exclude, columns دول parameters بنستخدمهم عشان نحدد ايه البيانات اللي عايزينها من DB
//filters بنستخدمها عشان نحدد شروط الاستعلام (زي WHERE في SQL)
//exclude بنستخدمها عشان نستبعد أعمدة معينة من النتيجة
//columns بنستخدمها عشان نحدد أعمدة معينة عايزين نرجعها

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
