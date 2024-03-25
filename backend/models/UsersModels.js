const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeeSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      trim: true,
      required: [true, "fullname is required"],
    },
    dateOfBirth: {
      type: String,
      trim: true,
      required: [true, "date of birth is required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "password needed"],
    },
    phoneNumber: {
      type: String,
      trim: true,
      required: [true, "phone number is required"],
    },
    jobSkills: {
      type: Object,
      required: [true, "skills is required"],
    },
    jobExperience: {
      type: Object,
      required: [true, "Experience is required"],
    },
    position: {
      type: String,
      trim: true,
      required: [true, "position is required"],
    },
    gender: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
      required: [true, "type is required"],
    },
    address: {
      type: String,
      trim: true,
      required: [true, "address is required"],
    },
    status: {
      type: String,
      trim: true,
    },
    application: [{ type: Schema.Types.ObjectId, ref: "applications" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", employeeSchema);
