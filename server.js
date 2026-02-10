require("dotenv").config();
const express = require("express");
const connectDB = require("./utils/db");

const app = express();

connectDB();
app.use(express.json());

app.use("/api", require("./routes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
