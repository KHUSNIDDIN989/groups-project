const express = require("express");
const router = express.Router();
const teams = require("../controllers/teams");

module.exports = router
  .post("/teams", teams.POST_TEAMS)
  .get("/teams", teams.GET_TEAMS)
  .put("/teams/:id", teams.UPDATE_TEAMS);
