



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
  

module.exports =router;