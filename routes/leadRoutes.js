



const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const leadQuery =require("../queries/leadQuery");
const leadCommand =require("../commands/leadCommand")

router.get("/",  async function (req , res) {
    const data = await leadQuery.getLeads();
    return res.status(200).json(data); 
});


// Create Lead

router.post(
    "/",
    [
      body("name").notEmpty().isString(),
      body("status").optional().isString(),
    ],
    async function (req, res) {
      const data = await leadCommand.createRecord(req.body);
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
      const data = await leadCommand.updateRecord({ id }, req.body);
      return res.status(200).json(data);
    }
  );
  
  // DELETE campaign
  router.delete(
    "/:id",
    async function (req, res) {
      const id = req.params.id;
      const data = await leadCommand.delRecord({ id });
      return res.status(200).json(data);
    }
  );
  
  // Get ONE campaign + Leads
  router.get(
    "/:id/details",
    async function (req, res) {
      const id = req.params.id;
      const data = await leadQuery.getCampaignWithLeads({ id });
      return res.status(200).json(data);
    }
  );
  
  
// Route لجلب جميع العملاء الذين ليس لديهم فريق
router.get("/without-team", async function (req, res) {
  try {
    // يمكن أن تمرر أي فلاتر إضافية إن أردت (مثل: status, name, etc)
    const data = await leadQuery.getLeadsWithoutTeam();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching leads without team" });
  }
});

router.post("/assign-team", async (req, res) => {
  try {
    const data = await leadCommand.updateleadwithteam(req, res);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Error create team" });
  }
});

module.exports =router;