const fetch = require("node-fetch");
const express = require("express");
const router = express.Router();
const { authenticate } = require("../utils/middlewares");

router.get("/", authenticate, (req, res) => {
  if (req.decoded) {
    fetch(
      "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten"
    )
      .then(p => p.json())
      .then(jokes => res.json(jokes))
      .catch(err => res.status(500).json({ error: "Error Fetching Jokes" }));
  } else {
    return res.status(422).json({ error: `Can't get these jokes!` });
  }
});

module.exports = router;
