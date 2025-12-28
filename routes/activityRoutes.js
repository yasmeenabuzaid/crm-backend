const express = require("express");
const router = express.Router();
const ActivityCommand = require("../commands/ActivityCommand");

router.post("/log-activity", async (req, res) => {
  const { client_id, activity_type, details } = req.body;

  try {
    const activityData = {
      client_id,
      activity_type,
      details,
    };
    
    const activity = await ActivityCommand.logActivity(activityData);
    return res.status(200).json(activity);  // إرجاع النشاط المخزن
  } catch (error) {
    console.error("Error logging activity:", error);
    return res.status(500).json({ error: "Error logging activity" });
  }
});

module.exports = router;