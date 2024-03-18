const addJobsModels = require("../models/addJobsModels");
const jobApplicationModels = require("../models/jobApplicationModels");
const { validationResult } = require("express-validator");
const multer = require("multer");
const path = require("path");

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname; // Get the original file name
    const sanitizedFileName = originalName.replace(/\s+/g, "_"); // Replace spaces with underscores
    cb(null, sanitizedFileName); // Use the original file name directly
  },
});

const uploadFile = multer({
  storage: fileStorage,
}).single("files");

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
  // Validate request parameters
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Save job application data to the database
    const newApplication = new jobApplicationModels({
      fullName: req.body.fullName,
      email: req.body.email,
      contact: req.body.contact,
      linkedIn: req.body.linkedIn,
      jobType: req.body.jobType,
      skills: req.body.skills,
      application: req.body.application,
      jobId: req.body.jobId,
      roles: 0,
      resume: req.body.resume,
      jobs: req.body.jobId,
    });

    const savedApplication = await newApplication.save();

    // Update the addjobs document with the applicant ID
    await updateAddJobWithApplicant(req.body.jobId, savedApplication._id);

    res.status(201).json({
      success: true,
      savedApplication,
      status: 1,
    });
  } catch (error) {
    console.error("Error saving job application:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.saveFiles = async (req, res) => {
  console.log(req);
  uploadFile(req, res, async function (err) {
    if (err) {
      console.error(err);
      return res.status(400).json({ message: "File upload failed" });
    }

    // File upload successful
    res.status(200).json({ message: "File uploaded successfully" });
  });
};

exports.getFiles = async (req, res) => {
  try {
    const userId = req.params.userId;
    const filename = req.params.filename;

    // Check if user exists
    const user = await jobApplicationModels.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.resume !== filename) {
      return res.status(400).json({ error: "Filename does not match" });
    }

    const filePath = path.join(__dirname, "..", "uploads", filename);
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error("Error sending file:", err);
        res.status(err.status).end();
      } else {
        console.log("File sent successfully");
      }
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
