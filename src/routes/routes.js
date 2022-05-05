const express = require("express");
const router = express.Router();
const teams = require("../controllers/teams");

module.exports = router.get("/teams", teams.GET_TEAMS);
