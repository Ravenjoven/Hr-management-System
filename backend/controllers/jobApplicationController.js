// controllers/JobApplicationController.js

const JobApplication = require("../models/jobApplicationModels");

exports.createJobApplication = async (req, res) => {
  try {
    const {
      jobName,
      fullName,
      email,
      contact,
      linkedIn,
      jobType,
      skills,
      resume,
      application,
    } = req.body;

    const newApplication = new JobApplication({
      jobName,
      fullName,
      email,
      contact,
      linkedIn,
      jobType,
      skills,
      resume,
      application,
    });

    const savedApplication = await newApplication.save();

    res.status(201).json(savedApplication);
  } catch (error) {
    console.error("Error saving job application:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
