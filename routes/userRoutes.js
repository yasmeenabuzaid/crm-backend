const express = require("express");
const router = express.Router();
const userQuery = require("../queries/userQuery");



router.get( "/" , async function name(req , res) {
    const data = await userQuery.getuser();
    return res.status(200).json(data);
});

module.exports= router;