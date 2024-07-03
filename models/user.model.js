const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    maxlength: 500,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  UpdatedAt: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});
const user = mongoose.model("user", userSchema)
module.exports = user;