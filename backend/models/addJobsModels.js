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
      type: Number, // Changed to Number for integer values
      trim: true,
      required: [true, "Slot is required"],
    },
    jobCategory: {
      type: String,
      trim: true,
      required: [true, "Category is required"], // Corrected spelling of Category
    },
    jobSkills: {
      type: Object, // Changed to String array
      required: [true, "Skills is required"],
    },
    jobSetUp: {
      type: String,
      trim: true,
      required: [true, "Setup is required"],
    },
    jobExperience: {
      type: Number, // Changed to Number for integer values
      trim: true,
      required: [true, "Experience is required"],
    },
    jobFromSalary: {
      type: Number, // Changed to Number for integer values
      trim: true,
    },
    jobToSalary: {
      type: Number, // Changed to Number for integer values
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("addjobs", jobSchema);
