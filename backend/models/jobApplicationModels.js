const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  jobName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  linkedIn: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  skills: {
    type: Object,
    required: true,
  },
  resume: {
    type: Object,
    required: true,
  },
  application: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const JobApplication = mongoose.model("applyjobs", jobApplicationSchema);

module.exports = JobApplication;
