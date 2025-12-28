const Campaign = require("./Campaign");
const Lead = require("./Lead");
const CampaignLead = require("./CampaignLead");

const Team = require("./Team");
const {User} = require("./User");
const TeamUser = require("./TeamUser");
const  Activity  = require("./Activity");

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
  foreignKey: "userId",
  as: "teams"
});

// علاقة القائد
Team.belongsTo(User, {
  foreignKey: "leader_id",
  as: "leader",
});

TeamUser.belongsTo(User, {
  foreignKey: "user_id"
});

User.hasMany(TeamUser, {
  foreignKey: "user_id"
});

Lead.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Lead, { foreignKey: 'user_id', as: 'leads' });
Campaign.belongsTo(User,{foreignKey: "userId"});


// relation team with leads
Team.hasMany(Lead, {
  foreignKey: 'team_id', // المفتاح الخارجي في جدول العملاء
  as: 'leads', // استخدام هذا الاسم للوصول إلى العملاء من الفريق
});

Lead.belongsTo(Team, {
  foreignKey: 'team_id', // المفتاح الخارجي في جدول العملاء
  as: 'team', // استخدام هذا الاسم للوصول إلى الفريق من العميل
});


Lead.hasMany(Activity ,{foreignKey:'client_id'});
Activity.belongsTo(Lead,{foreignKey:'client_id'});

module.exports = { 
  Campaign, Lead, CampaignLead,
  Team, User, TeamUser , Activity
};
