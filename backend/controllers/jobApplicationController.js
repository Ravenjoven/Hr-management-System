const addJobsModels = require("../models/addJobsModels");
const JobApplication = require("../models/jobApplicationModels");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const uploadFile = multer({
  storage: fileStorage,
}).single("resume");

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
  console.log(req.body);
  uploadFile(req, res, async function (err) {
    if (err) {
      console.log(err);
      return res.status(400).send("File upload failed");
    }

    try {
      const {
        jobId,
        fullName,
        email,
        contact,
        linkedIn,
        jobType,
        skills,
        application,
      } = req.body;

      let resume = null;

      if (req.file) {
        resume = req.file.filename;
      }

      const newApplication = new JobApplication({
        jobId,
        fullName,
        email,
        contact,
        linkedIn,
        jobType,
        roles: 0,
        skills,
        resume,
        application,
      });

      const savedApplication = await newApplication.save();

      // Update the addjobs document with the applicant ID
      await updateAddJobWithApplicant(jobId, savedApplication._id);

      res.status(201).json(savedApplication);
    } catch (error) {
      console.error("Error saving job application:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
};
