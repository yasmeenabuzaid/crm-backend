const  express = require("express");
const router = express.Router();
const internalController= require("../controllers/internalController");



router.get("/leads" , internalController.getAllLeads)
router.get("/campaigns" , internalController.getAllCampaign)


module.exports = router ; 