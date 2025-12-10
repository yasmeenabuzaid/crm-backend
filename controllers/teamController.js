// const Team = require("../models/Team");

// exports.createTeam = async (req, res) => {
//   try {
//     const { name, description, team_type, leader_id } = req.body;

//     // التحقق البسيط (Validation بسيط قبل ما نعمل Validation كامل لاحقاً)
//     if (!name) {
//       return res.status(400).json({ message: "Team name is required" });
//     }

//     const team = await Team.create({
//       name,
//       description,
//       team_type,
//       leader_id,
//       status: "active" // لما تنشئ فريق جديد دائماً Active
//     });

//     return res.status(201).json({
//       message: "Team created successfully",
//       team,
//     });

//   } catch (error) {
//     console.error("Create Team Error:", error);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// };


// exports.getAllTeams = async (req, res) => {
//   try {
//     const teams = await Team.findAll();
//     res.json(teams);
//   } catch (error) {
//     console.error("Get Teams Error:", error);
//     res.status(500).json({ error: "Failed to fetch teams" });
//   }
// };



// //  UPDATE TEAM 
// exports.updateTeam = async (req, res) => {
//   try {
//     const teamId = req.params.id;
//     const { name, description, team_type, leader_id, status } = req.body;

//     const team = await Team.findByPk(teamId);
//     if (!team) {
//       return res.status(404).json({ message: "Team not found" });
//     }

//     await team.update({
//       name,
//       description,
//       team_type,
//       leader_id,
//       status,
//     });

//     res.json({
//       message: "Team updated successfully",
//       team,
//     });
//   } catch (error) {
//     console.error("Update Team Error:", error);
//     res.status(500).json({ error: "Failed to update team" });
//   }
// };

// // DELETE TEAM 
// exports.deleteTeam = async (req, res) => {
//   try {
//     const teamId = req.params.id;

//     const team = await Team.findByPk(teamId);
//     if (!team) {
//       return res.status(404).json({ message: "Team not found" });
//     }

//     await team.destroy();

//     res.json({ message: "Team deleted successfully" });
//   } catch (error) {
//     console.error("Delete Team Error:", error);
//     res.status(500).json({ error: "Failed to delete team" });
//   }
// };