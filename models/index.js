const Campaign = require("./Campaign");
const Lead = require("./Lead");
const CampaignLead = require("./CampaignLead");

const Team = require("./Team");
const User = require("./User");
const TeamUser = require("./TeamUser");

// Campaign - Lead (Many-to-Many)
Campaign.belongsToMany(Lead, { 
  through: CampaignLead,
  foreignKey: "campaign_id",
  otherKey: "lead_id"
});

Lead.belongsToMany(Campaign, { 
  through: CampaignLead,
  foreignKey: "lead_id",
  otherKey: "campaign_id"
});


// Team - User (Many-to-Many)
Team.belongsToMany(User, {
  through: TeamUser,
  foreignKey: "team_id",
  as: "members"
});

User.belongsToMany(Team, {
  through: TeamUser,
  foreignKey: "user_id",
  as: "teams"
});

// علاقة القائد
Team.belongsTo(User, {
  foreignKey: "leader_id",
  as: "leader",
});


module.exports = { 
  Campaign, Lead, CampaignLead,
  Team, User, TeamUser
};
