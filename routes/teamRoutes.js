



const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const teamQuery = require("../queries/teamQuery");
const teamCommand = require("../commands/teamCommand");

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



// Route لجلب القادة بناءً على teamId
router.get("/:teamId/leaders", async function (req, res) {
  const { teamId } = req.params;  // الحصول على teamId من URL
    const leaders = await teamQuery.getLeaders(teamId);
    return res.status(200).json(leaders);
});

module.exports = router;
