const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
  country: { type: String },
  accountType: { type: String, default: "personnel" },
  balance: { type: Number, default: 0 },
  isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
