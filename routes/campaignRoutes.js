var express = require("express");
// مكتبة للتحقق من المدخلات
// مثل: هل اسم الكامبين موجود؟ هل الـ id رقم؟ إلخ…
const { body, validationResult, param } = require("express-validator");
// هذا بيخلي كل “مجموعة روتات” في ملف لحال، وما تتخربط ببعض.
var router = express.Router();

// Queries
const campaignQuery = require("../queries/campaignQuery");

// Commands
const campaignCommand = require("../commands/campaignCommand");

// GET all campaigns
router.get("/", async function (req, res) {
  const data = await campaignQuery.getRecords(); 
  // بدون فلتر، يرجع كل الحملات
  return res.status(200).json(data);
});





// CREATE campaign
router.post(
  "/",
  [
    body("name").notEmpty().isString(),
    body("status").optional().isString(),
  ],
  async function (req, res) {
    const data = await campaignCommand.createRecord(req.body);
    return res.status(200).json(data);
  }
);







// UPDATE campaign
router.put(
  "/:id",
  [
    param("id").notEmpty(),
    body("name").optional().isString(),
  ],
  async function (req, res) {
    const id = req.params.id;
    const data = await campaignCommand.updateRecord({ id }, req.body);
    return res.status(200).json(data);
  }
);

// DELETE campaign
router.delete(
  "/:id",
  async function (req, res) {
    const id = req.params.id;
    const data = await campaignCommand.delRecord({ id });
    return res.status(200).json(data);
  }
);

// Get ONE campaign + Leads
router.get(
  "/:id/details",
  async function (req, res) {
    const id = req.params.id;
    const data = await campaignQuery.getCampaignWithLeads({ id });
    return res.status(200).json(data);
  }
);

module.exports = router;
