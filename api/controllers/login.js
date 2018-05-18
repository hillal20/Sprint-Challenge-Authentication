const User = require("../models/userModels");
const express = require("express");
const router = express.Router();
const { makeToken } = require("../../config");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    // console.log("user", user);
    if (err) {
      return res.status(500).json({ error: "Invalid Username/Password" });
    }

    if (!user) {
      return res
        .status(422)
        .json({ error: "No user with that username in our DB" });
    }

    user.checkPassword(password, (err, isMatch) => {
      if (err) {
        return res.status(422).json({ error: "passwords dont match" });
      }

      if (isMatch) {
        const token = makeToken({ username: user.username });
        res.json({ token: token });
      } else {
        return res.status(422).json({ error: "passwords dont match" });
      }
    });
  });
});

module.exports = router;
