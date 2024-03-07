const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name is required"],
    maxlength: 70,
  },
  iat: {
    type: Number,
    trim: true,
    required: [true, "IAT is required"],
  },
  iss: {
    type: String,
    trim: true,
    required: [true, "ISS is required"],
  },
  familyName: {
    type: String,
    trim: true,
    required: [true, "Family Name is required"],
  },
  givenName: {
    type: String,
    trim: true,
    required: [true, "Given Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // Example: You may want to make emails unique
    lowercase: true,
    // Add more validation if needed
  },
  jti: {
    type: String,
    trim: true,
    required: [true, "JTI is required"],
  },
}, { timestamps: true });

module.exports = mongoose.model("credentials", userSchema);
