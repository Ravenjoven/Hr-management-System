//this is add category created by ranel
const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
  {
    jobName: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
      maxlength: 70,
    },
    jobDescription: {
      type: String,
      trim: true,
      required: [true, "Description is required"],
    },
    jobType: {
      type: String,
      trim: true,
      required: [true, "Type is required"],
    },
    jobSlots: {
      type: Number,
      trim: true,
      required: [true, "Slot is required"],
    },
    jobCategory: {
      type: String,
      trim: true,
      required: [true, "Category is required"],
    },
    jobSkills: {
      type: Object,
      required: [true, "Skills is required"],
    },
    jobSetUp: {
      type: String,
      trim: true,
      required: [true, "Setup is required"],
    },
    jobExperience: {
      type: Number,
      trim: true,
      required: [true, "Experience is required"],
    },
    jobFromSalary: {
      type: Number,
      trim: true,
    },
    jobToSalary: {
      type: Number,
      trim: true,
    },
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: "categories" }],
    applicant: [{ type: mongoose.Schema.Types.ObjectId, ref: "applyjobs" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("addjobs", jobSchema);
