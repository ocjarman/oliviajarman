const express = require("express");
const app = express();
const path = require("path");
const volleyball = require("volleyball");

const cors = require("cors");
const http = require("http");

// need cors to make connection with frontend
app.use(cors());

const server = http.createServer(app);

// Set up middleware
app.use(volleyball);
app.use(express.json());

// Set up routes
app.use("/api", require("./api"));

// when someone goes to connect to server thru client, this will start running

server.listen(process.env.PORT || 3000, () => {
  console.log("server is running");
});

module.exports = server;
