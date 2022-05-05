const { read, write } = require("../utils/FS");

const GET_TEAMS = (req, res) => {
  try {
    const data = read("teams.json");

    res.json(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};

const POST_TEAMS = (req, res);
module.exports = {
  GET_TEAMS,
};
