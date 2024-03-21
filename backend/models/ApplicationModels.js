const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jobApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      required: [true, "Fullname is required"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
    },
    contact: {
      type: String,
      trim: true,
      required: [true, "Contact is required"],
    },
    linkedIn: {
      type: String,
      trim: true,
      required: [true, "Linkedin is required"],
    },
    jobType: {
      type: String,
      trim: true,
      required: [true, "Job type is required"],
    },
    Status: {
      type: String,
    },
    skills: {
      type: Object,
      trim: true,
      required: [true, "Skills is required"],
    },
    resume: {
      type: String,
      trim: true,
      required: [true, "Resume is required"],
    },
    application: {
      type: String,
      trim: true,
      required: [true, "Applications is required"],
    },
    jobs: [{ type: Schema.Types.ObjectId, ref: "jobs" }],
    user: [{ type: Schema.Types.ObjectId, ref: "users" }],
    application: [{ type: Schema.Types.ObjectId, ref: "jobs" }],
    comment: [{ type: Schema.Types.ObjectId, ref: "comments" }],
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("application", jobApplicationSchema);
