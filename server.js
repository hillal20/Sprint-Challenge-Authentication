const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

const server = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

server.use(express.json());
server.use(cors(corsOptions));

mongoose
  .connect("mongodb://localhost/auth-users", {})
  .then(() => {
    console.log("\n=== Connected to MongoDB ===");
  })
  .catch(err =>
    console.log("\n=== Error connecting to MongoDb, is it running? ===\n", err)
  );
server.get("/", (req, res) => {
  res.send("ipi is running");
});
const loginRouter = require("./api/controllers/login.js");
server.use("/api/login", loginRouter);
const createUserRouter = require("./api/controllers/user.js");
server.use("/api/users", createUserRouter);
const getAllJokesRouter = require("./api/controllers/jokes.js");
server.use("/api/jokes", getAllJokesRouter);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
