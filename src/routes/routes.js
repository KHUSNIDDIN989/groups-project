const express = require("express");
const router = express.Router();
const teams = require("../controllers/teams");
const palyers = require("../controllers/players");
module.exports = router
  .get("/teams", teams.GET_TEAMS)
  .post("/teams", teams.POST_TEAMS)
  .put("/teams/:id", teams.UPDATE_TEAMS)
  .delete("/teams/:id", teams.DELETE_TEAMS)
  .get("/players", palyers.GET_PLAYERS)
  .put("/players", palyers.UPDATE_PLAYERS)
  .delete("/players", palyers.DELETE_PLAYERS);
