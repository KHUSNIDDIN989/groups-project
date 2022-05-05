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

const UPDATE_TEAMS = (req, res) => {
  try {
    const { name, logo, trener } = req.body;
    const { id } = req.params;

    const data = read("teams.json");
    const teams = data.find((e) => e.id == id);

    teams.name = name || teams.name;
    teams.logo = logo || teams.logo;
    teams.trener = trener || teams.trener;

    write("teams.json", data);
    res.sendStatus(200).json(teams);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const DELETE_TEAMS = (req, res) => {
  const id = req.params.id;
  const teams = read("teams.json");

  const teamIndex = teams.findIndex((i) => i.id == id);
  teams.splice(teamIndex, 1);

  write("teams.json", teams);
  res.send("Deleted !");
};

module.exports = {
  GET_TEAMS,
  POST_TEAMS,
  UPDATE_TEAMS,
  DELETE_TEAMS,
};
