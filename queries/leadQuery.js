const {Lead, Campaign } = require("../models");

const getLeads =  async( filters = {} , exclude =[] , columns=[]) => {
    try{
        let attributes = { exclude : exclude};
        if(columns?.length){
            attributes.includes =columns;
        }
     const resp = await Lead.findAll({
        where:{ ...filters},
        attributes :attributes,
     })

     return resp;
    } catch (error){
        return {error: error};
    }
};


const getLead =  async( filters = {} , exclude =[] , columns=[]) => {
    try{
        let attributes = { exclude : exclude};
        if(columns?.length){
            attributes.includes =columns;
        }
     const resp = await Lead.findOne({
        where:{ ...filters},
        attributes :attributes,
     })

      return resp;
    } catch (error){
        return {error: error};
    }
};



const getLeadWithCampaigns = async(filters) => {
try{
    const resp = await Lead.findOne({
        where : {filters} , 
        include:[{
            model: Campaign,
            through: { attributes: [] },
        }],
    });
    return resp ;

}catch (error){
    return { error:error};
}
};

module.exports={
    getLeads,
    getLead,
    getLeadWithCampaigns
}