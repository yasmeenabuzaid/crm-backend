const {User} = require("../models");

const getuser = async ( filters ={system_role:"employee"} ,  columns =["name", "id"]) =>{
    try{
        const resp = await User.findAll({
            where:filters,
            attributes: columns,
        });
        return resp;
    }catch (error){
        return { error : error};
    }
}
module.exports={
getuser,

};
