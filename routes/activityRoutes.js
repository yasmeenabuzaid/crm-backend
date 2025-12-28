const express = require("express");
const router = express.Router();
const ActivityCommand = require("../commands/ActivityCommand");
const actitvityQuery =require("../queries/actitvityQuery");
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


// GET all activities
// router.get("/", async (req, res) => {
//     const data = await activityQuery.getActivity();
//     return res.status(200).json(data);
// });


// جلب كل الأنشطة أو حسب العميل
// routes/activityRoutes.js
router.get("/", async (req, res) => {
  try {
    const { client_id } = req.query;

    const filter = client_id ? { client_id } : {};
    const activities = await actitvityQuery.getActivity(filter);
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;