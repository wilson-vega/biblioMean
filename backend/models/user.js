const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  autor: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.method.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      autor: this.autor,
    },
    "secretKey"
  );
};

const User = mongoose.model("user", userSchema);

module.exports.User = User;
