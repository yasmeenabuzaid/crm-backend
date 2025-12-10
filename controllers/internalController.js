const { Lead, Campaign } = require("../models");

exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll();  
    res.json({ success: true, leads });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal error",
      error: error.message,
    });
  }
};



exports.getAllCampaign= async (req, res) => {
  try {
    const Campaigns = await Campaign.findAll();  
    res.json({ success: true, Campaigns });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal error",
      error: error.message,
    });
  }
};