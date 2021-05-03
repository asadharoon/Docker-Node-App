const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
require("./bootstrapApplication").bootstrap(app)

app.get("/", (req, res) => {
  res.send("Hello from docker node");
});

app.listen(9001, () => {
  console.log("server is listening 9001");
});
