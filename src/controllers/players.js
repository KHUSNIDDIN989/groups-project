const { read, write } = require("../utils/FS");

const GET_PLAYERS = (_, res) => {
  try {
    const data = read("players.json");

    res.json(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};

const POST_PLAYERS = (req, res) => {
  try {
    const { name, price, position } = req.body;
    const data = read("players.json");

    data.push({ id: data.length + 1, name, price, position });

    write("players.json", data);
    res.send("ok");
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};

const UPDATE_PLAYERS = (req, res) => {
  try {
    const players = read("players.json");
    const data = req.body;
    const playerId = req.url.split("/")[4];
    const teamId = req.url.split("/")[2];
    const index = players.findIndex(
      (e) => e.id == playerId && e.team_id == teamId
    );
    players[index] = {
      id: players[index].id,
      name: data?.name || [index].name,
      price: data?.price || players[index].price,
      postion: data?.postion || players[index].postion,
    };
    res.sendStatus(200).json(players);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const DELETE_PLAYERS = (req, res) => {
  const id = req.params.id;
  const players = read("players.json");

  const teamIndex = players.findIndex((i) => i.id == id);
  players.splice(teamIndex, 1);

  write("players.json", players);
  res.send("Deleted !");
};
module.exports = {
  GET_PLAYERS,
  POST_PLAYERS,
  UPDATE_PLAYERS,
  DELETE_PLAYERS,
};
