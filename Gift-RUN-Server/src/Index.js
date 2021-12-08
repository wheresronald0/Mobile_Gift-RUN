const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json()); //enables express to read a json obj
app.use(authRoutes);

const mongoURI =
  "mongodb+srv://admin:admin1@cluster0.ibdxc.mongodb.net/Gift-RUN?retryWrites=true&w=majority";
mongoose.connect(mongoURI);
mongoose.connection.on("connected", () => {
  console.log("Connected to Mongo!");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to Mongo", err);
});

app.get("/", (req, res) => {
  res.send("You rang?");
});

app.listen(3000, () => {
  console.log("Port 3000 is live!");
}); //run node src/Index.js in terminal and then test n browser too: localhost:3000
