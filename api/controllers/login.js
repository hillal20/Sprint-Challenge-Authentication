const User = require("../models/userModels");
const express = require("express");
const router = express.Router();
const { makeToken } = require("../../config");

// router.post("/", (req, res) => {
//   const { username, password } = req.body;
//   User.findOne({ username }, (err, user) => {
//     if (err) {
//       return res.status(500).json({ error: "Invalid Username/Password" });
//     }

//     if (!user) {
//       return res
//         .status(422)
//         .json({ error: "No user with that username in our DB" });
//     }

//     user.checkPassword(password, (err, result) => {
//       if (err) {
//         return res.status(422).json({ error: "passwords dont match" });
//       }

//       if (result) {
//         const token = makeToken({ username: user.username });
//         res.json({ token: token });
//       } else {
//         return res.status(422).json({ error: "passwords dont match" });
//       }
//     });
//   });
// });

router.post("/", (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username })
    .then(p => {
      if (p) {
        p
          .checkPassword(password)

          .then(result => {
            if (result) {
              const token = makeToken(p);

              res.status(200).json({ msg: "login successful", token: token });
            } else {
              res.status(401).json("invalid password");
            }
          });
      } else {
        res.status(401).json("invalid username");
      }
    })
    .catch(err => res.json(err));
});

module.exports = router;
