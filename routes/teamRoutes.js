const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const teamQuery = require("../queries/teamQuery");
const teamCommand = require("../commands/teamCommand");
const teamUserCommand = require("../commands/teamUserCommand");
const { Team } = require("../models");  
const { User } = require("../models"); 

// Get All Teams
router.get("/", async function (req, res) {
  const data = await teamQuery.getRecords();
  return res.status(200).json(data);
});


// Create Team
router.post(
  "/",
  [
    body("name").notEmpty().isString(),
    body("status").optional().isString(),
  ],
  async function (req, res) {
    const data = await teamCommand.createRecord(req.body);
    return res.status(200).json(data);
  }
);

// Update Team
router.put(
  "/:id",
  [
    param("id").notEmpty(),
    body("name").optional().isString(),
  ],
  async function (req, res) {
    const id = req.params.id;
    const data = await teamCommand.updateRecord({ id }, req.body);
    return res.status(200).json(data);
  }
);

// Delete Team
router.delete("/:id", async function (req, res) {
  const id = req.params.id;
  const data = await teamCommand.delRecord({ id });
  return res.status(200).json(data);
});






// POST: لتخزين الأعضاء في الفريق
router.post("/:teamId/assign-members", async (req, res) => {
 const { teamId } = req.params;   //  from params
 const { userIds } = req.body;    //  from body


  if (!teamId || !userIds || userIds.length === 0) {
    return res.status(400).json({ error: "Team ID and user IDs are required" });
  }

  try {
    const team = await Team.findByPk(teamId);
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    const users = await User.findAll({ where: { id: userIds } });
    if (users.length !== userIds.length) {
      return res.status(404).json({ error: "One or more users not found" });
    }
    const teamUserPromises = users.map(user => {
      return teamUserCommand.createRecord({
        teamId: team.id, 
        userId: user.id, 
        role_in_team: "member", 
      });
    });
    await Promise.all(teamUserPromises);
    return res.status(200).json({ message: "Members assigned successfully" }); 
  } catch (error) {
    return res.status(500).json({ error: "An error occurred while assigning members" }); 
  }
});


router.get("/:teamId/members", async (req, res) => {
  const { teamId } = req.params;

  const data = await teamQuery.getMembers(teamId);

  return res.status(200).json(data);
});

// router.delete("/teams/:teamId/members/:userId" , async (req ,res) =>{
//    const { teamId, userId } = req.params;
//      const deletedmember= await deletemembers(teamId, userId);
//      return res.status(200).json(deletedmember);
// });

router.delete("/:teamId/members/:userId", async (req, res) => {
  const { teamId, userId } = req.params;  // استخراج teamId و userId من الـ params
  
  // التحقق من أن قيم المعاملات موجودة
  if (!teamId || !userId) {
    return res.status(400).json({ error: "teamId and userId are required" });
  }

  try {
    // استدعاء الدالة deletemembers لحذف العضو
    const deletedMemberCount = await teamUserCommand.deletemembers(teamId, userId);

    // إذا كانت القيمة المحذوفة أكثر من 0، فهذا يعني أنه تم حذف العضو بنجاح
    if (deletedMemberCount > 0) {
      return res.status(200).json({ message: `${deletedMemberCount} member(s) deleted successfully` });
    } else {
      return res.status(404).json({ message: "Member not found or already deleted" });
    }
  } catch (error) {
    console.error("Error during member deletion:", error);
    return res.status(500).json({ error: "An error occurred while deleting the member." });
  }
});
module.exports = router;
