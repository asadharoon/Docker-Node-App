const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 9001;
app.use(bodyParser.json());
app.use(cors());
require("./bootstrapApplication").bootstrap(app)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => {
  console.log(`server is listening ${port}`);
});