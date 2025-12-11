// const { Lead } = require("../models");
// const {Campaign } = require("../models");

// // exports.getAllLeads = async (req, res) => {
// //   try {
// //     const leads = await Lead.findAll({
// //       where: { is_deleted: false }   // ← مهم جداً
// //     });
// //     res.json(leads);
// //   } catch (error) {
// //     res.status(500).json({ error: "Failed to fetch leads" });
// //   }
// // };


// exports.updateLead = async (req, res) => {
//   try {
//     const id = req.params.id;

//     const [updated] = await Lead.update(req.body, { where: { id } });

//     if (!updated) {
//       return res.status(404).json({ message: "Lead not found" });
//     }

//     const lead = await Lead.findByPk(id);
//     res.json(lead);

//   } catch (error) {
//     res.status(500).json({ error: "Error updating lead" });
//   }
// };


// exports.createLead = async (req, res) => {
//   try {
//     const lead = await Lead.create(req.body);
//     res.json(lead);
//   } catch (error) {
//     res.status(500).json({ error: "Error creating lead" });
//   }
// };

// // SOFT DELETE lead
// exports.deleteLead = async (req, res) => {
//   try {
//     const id = req.params.id;

//     await Lead.update(
//       { is_deleted: true },
//       { where: { id } }
//     );

//     res.json({ message: "Lead soft deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Error soft deleting lead" });
//   }
// };


// exports.getLeadWithCampaigns = async (req, res) => {
//   try {
//     const id = req.params.id;

//     const lead = await Lead.findByPk(id, {
//       include: [
//         {
//           model: Campaign,
//           through: { attributes: [] }
//         }
//       ]
//     });

//     if (!lead) return res.status(404).json({ message: "Lead not found" });

//     res.json(lead);
//   } catch (error) {
//     console.log("ERROR:", error);
//     res.status(500).json({ message: "Error fetching lead campaigns" });
//   }
// };
