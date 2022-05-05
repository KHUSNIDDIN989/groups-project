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

const POST_TEAMS = (req, res) => {
  console.log(req.body);
  try {
    console.log(req.body);
    const { name, players, logo } = req.body;
    const data = read("teams.json");

    data.push({ id: data.length + 1, name, players, logo });

    write("teams.json", data);

    res.send("ok");
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};

module.exports = {
  GET_TEAMS,
  POST_TEAMS,
};
