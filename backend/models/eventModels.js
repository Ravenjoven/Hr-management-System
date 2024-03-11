const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  date: {
    type: String,
    trim: true,
    required: [true, "date is required"],
  },
  reminders: {
    type: String,
    trim: true,
    required: [true, "event is required"],
  },
  time: {
    type: String,
    trim: true,
    required: [true, "time is required"],
  }
}, { timestamps: true });

module.exports = mongoose.model("events", userSchema);
