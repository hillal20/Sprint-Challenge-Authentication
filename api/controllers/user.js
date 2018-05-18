const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const { makeToken } = require("../../config");

router.post("/", (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(p => {
      console.log("user", p);
      const token = makeToken(p);
      res.status(200).json({ msg: "register successfully", p, token });
    })
    .catch(err => {
      res.json({ msg: "not able to register you" });
    });
});

module.exports = router;
