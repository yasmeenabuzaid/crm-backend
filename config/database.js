const { Sequelize } = require("sequelize");
require("dotenv").config();



// هنا نقوم بقراءة القيم المخزنة في ملف البيئة .env باستخدام process.env. المتغيرات مثل DB_HOST, DB_PORT, DB_USER_NAME, إلخ يتم تخزينها في ملف .env، ويتم استخدامها لتكوين الاتصال مع قاعدة البيانات.

const {
  DB_HOST,
  DB_PORT,
  DB_USER_NAME,
  DB_PASSWORD,
  DB_NAME,
  DB_DIALECT,
} = process.env;


// const sequelize = new Sequelize(...);: هنا نحن نُنشئ كائن sequelize باستخدام الـ Sequelize constructor، الذي يستقبل 4 معلمات:
// // DB_NAME: اسم قاعدة البيانات التي سنتصل بها.
// // DB_USER_NAME: اسم المستخدم الخاص بقاعدة البيانات.
// // DB_PASSWORD: كلمة المرور الخاصة بقاعدة البيانات.
// // خيارات الاتصال (داخل كائن):
// // host: DB_HOST: يُحدد عنوان السيرفر أو الـ host الذي توجد عليه قاعدة البيانات.
// // port: DB_PORT: يُحدد رقم البورت الذي سيتم الاتصال من خلاله بقاعدة البيانات.
// // dialect: DB_DIALECT: يُحدد نوع قاعدة البيانات (مثل postgres, mysql, sqlite, إلخ).
// // logging: false: هنا يتم تعطيل الـ logging، أي أنه لن يتم طباعة استعلامات SQL في الـ console.
// // define: {...}:
// // هذه الإعدادات خاصة بكيفية تعريف الجداول في Sequelize:
// // timestamps: true: يعني أنه سيتم إضافة أعمدة createdAt و updatedAt تلقائيًا في كل جدول.
// // underscored: true: سيتم استخدام الـ snake_case بدلاً من camelCase في أسماء الأعمدة. يعني أن createdAt سيصبح created_at.
// // freezeTableName: true: يعني أنه لن يتم إضافة الـ s في نهاية أسماء الجداول تلقائيًا (مثل users بدلًا من user).







const sequelize = new Sequelize(DB_NAME, DB_USER_NAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  logging: false, 
  define: {
    timestamps: true,       
    underscored: true,       
    freezeTableName: true,   
  },
});


// await sequelize.authenticate();

// نقوم باستخدام sequelize.authenticate() لاختبار الاتصال بقاعدة البيانات.
//  هذه الطريقة تحاول الاتصال بقاعدة البيانات باستخدام المعطيات التي قمت بتوفيرها.
//   إذا تم الاتصال بنجاح، يتم طباعة رسالة في الـ console.


// Test connection immediately on startup
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log(` Connected to Database: ${DB_NAME}`);
//   } catch (error) {
//     console.error(" Database connection error:", error.message);
//   }
// })();


sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected to Database: ${DB_NAME}`);
  })
  .catch((error) => {
    console.error("Database connection error:", error.message);
  });


module.exports = sequelize;
