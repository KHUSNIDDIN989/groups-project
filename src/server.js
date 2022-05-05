const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;
const path = require("path");
const router = require("./routes/routes");
const cors = require("cors");
// settings
app.set("view engine", "ejs");
app.set("views", __dirname + "/views/");

// middlewares
app.use("/assets", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// routers
app.use(router);

app.use("/*", (_, res) => res.sendStatus(404));

app.listen(PORT, () => {
  console.log(PORT);
});
