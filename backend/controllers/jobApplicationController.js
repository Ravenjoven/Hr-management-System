// controllers/JobApplicationController.js
const addJobsModels = require("../models/addJobsModels");
const JobApplication = require("../models/jobApplicationModels");

async function updateAddJobWithApplicant(jobId, applicantId) {
  try {
    const addJob = await addJobsModels.findById(jobId);
    if (!addJob) {
      console.log("Job not found");
      return;
    }

    addJob.applicant.push(applicantId);
    await addJob.save();
  } catch (error) {
    console.error("Error updating addjob with applicant:", error);
  }
}

exports.createJobApplication = async (req, res) => {
  try {
    const {
      jobId,
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
      roles: 0,
      skills,
      resume,
      application,
      jobs: jobId,
    });

    const savedApplication = await newApplication.save();

    // Update the addjobs document with the applicant ID
    await updateAddJobWithApplicant(req.body.jobId, savedApplication._id);

    res.status(201).json(savedApplication);
  } catch (error) {
    console.error("Error saving job application:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
