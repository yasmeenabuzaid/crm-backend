const express = require("express");
const app = express();
const sequelize = require("./config/database");
const cors = require("cors");
app.use(cors());
app.use(express.json());

require("./models/index");
// Import Campaign Routes
const campaignRoutes = require("./routes/campaignRoutes");
const leadRoutes = require("./routes/leadRoutes");
const teamRoutes = require("./routes/teamRoutes");
const userRoutes = require("./routes/userRoutes");
 const internalRoutes = require("./routes/internal"); 
// Use Routes
app.use("/api/campaigns", campaignRoutes);
app.use("/api/leads" ,leadRoutes );
app.use("/api/teams", teamRoutes);
app.use("/api/users",userRoutes )
app.use("/api/internal" , internalRoutes);




// Route test
app.get("/", (req, res) => {
  res.send("API is working fine!");
});

// Start server
const PORT = 5000;


sequelize.authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch(err => console.log("Error connecting to database:", err));


  // sequelize.sync({ alter: true })
  // .then(() => console.log("All models synced"))
  // .catch(err => console.log(err));



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
