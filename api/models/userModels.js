const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const definition = {
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
};
const options = {
  timestamps: true
};

const UserSchema = new Schema(definition, options);

UserSchema.pre("save", function(next) {
  bcrypt.hash(this.password, 11, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    next();
  });
});

UserSchema.methods.checkPassword = function(passwordGuess, cb) {
  bcrypt.compare(passwordGuess, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("User", UserSchema);
