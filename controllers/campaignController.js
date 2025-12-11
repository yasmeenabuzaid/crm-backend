// const { Campaign } = require("../models");
// const { Lead } = require("../models");

// // GET all campaigns
// exports.getAllCampaigns = async (req, res) => {
//   try {
//     const campaigns = await Campaign.findAll();
//     res.json(campaigns);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch campaigns" });
//   }
// };

// // POST create campaign
// exports.createCampaign = async (req, res) => {
//   try {
//     const campaign = await Campaign.create(req.body);
//     res.json(campaign);
//   } catch (error) {
//     res.status(500).json({ error: "Error creating campaign" });
//   }
// };

// // DELETE campaign
// exports.deleteCampaign = async (req, res) => {
//   try {
//     const id = req.params.id;

//     const deleted = await Campaign.destroy({ where: { id } });
//     if (deleted === 0) {
//       return res.status(404).json({ message: "Campaign not found" });
//     }

//     res.json({ message: "Campaign deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting campaign" });
//   }
// };

// // PUT update campaign
// exports.updateCampaign = async (req, res) => {
//   try {
//     const id = req.params.id;

//     const [updated] = await Campaign.update(req.body, {
//       where: { id },
//     });

//     if (updated === 0) {
//       return res.status(404).json({ message: "Campaign not found" });
//     }

//     const updatedCampaign = await Campaign.findByPk(id);
//     res.json(updatedCampaign);

//   } catch (error) {
//     res.status(500).json({ message: "Error updating campaign" });
//   }



  
// };



// //  Get campaign + all related leads
// exports.getCampaignWithLeads = async (req, res) => {
//   try {
//     const id = req.params.id;

//     // 1️⃣ نجيب الحملة + العملاء المرتبطين فيها
//     const campaign = await Campaign.findByPk(id, {
//       include: [
//         {
//           model: Lead,
//           through: { attributes: [] } // يخفي بيانات جدول CampaignLead
//         }
//       ]
//     });

//     // 2️⃣ إذا الحملة مش موجودة
//     if (!campaign) {
//       return res.status(404).json({ message: "Campaign not found" });
//     }

//     // 3️⃣ رجّع الحملة + العملاء
//     res.json(campaign);

//   } catch (error) {
// console.log("🔥 ERROR:", error);
// res.status(500).json({ message: error.message });
//   }
// };
