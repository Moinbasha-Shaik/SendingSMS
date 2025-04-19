const process = require("node:process");
const express = require("express");
const bodyParser = require("body-parser");
const smsRoutes = require("./routes/smsRoutes.js");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use("/api", smsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
