const JobsModels = require("../models/JobsModels");
const ApplicationModels = require("../models/ApplicationModels");
const UsersModels = require("../models/UsersModels");
const CommentModels = require("../models/CommentModels");
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

async function updateJobWithApplicantion(jobId, applicantId) {
  try {
    const job = await JobsModels.findById(jobId);
    if (!job) {
      console.log("Job not found");
      return;
    }

    job.applicant.push(applicantId);
    await job.save();
  } catch (error) {
    console.error("Error updating job with applicant:", error);
  }
}

async function updateUserWithApplication(userId, applicantId) {
  try {
    const user = await UsersModels.findById(userId);
    if (!user) {
      console.log("user not found");
      return;
    }

    user.application.push(applicantId);
    await user.save();
  } catch (error) {
    console.error("Error updating user with applicant:", error);
  }
}

async function updateApplicationWithComment(applicantionId, commentId, status) {
  try {
    const application = await ApplicationModels.findById(applicantionId);
    if (!application) {
      console.log("application not found");
      return;
    }

    application.comments.push(commentId);
    await application.save();

    await ApplicationModels.findOneAndUpdate(
      { _id: applicantionId },
      {
        $set: {
          Status: status,
        },
      },
      { new: true }
    );

    console.log("Application updated successfully");
  } catch (error) {
    console.error("Error updating application:", error);
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
    const newApplication = new ApplicationModels({
      fullName: req.body.fullName,
      email: req.body.email,
      contact: req.body.contact,
      linkedIn: req.body.linkedIn,
      jobType: req.body.jobType,
      skills: req.body.skills,
      application: req.body.application,
      jobId: req.body.jobId,
      Status: "Applied",
      resume: req.body.resume,
      jobs: req.body.jobId,
      user: req.body.userId,
    });

    const savedApplication = await newApplication.save();

    // Update the jobs document with the applicant ID
    await updateJobWithApplicantion(req.body.jobId, savedApplication._id);

    await updateUserWithApplication(req.body.userId, savedApplication._id);

    res.status(201).json({
      success: true,
      savedApplication,
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
    const user = await ApplicationModels.findById(userId);
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

exports.movePending = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Save job application data to the database
    const newComment = new CommentModels({
      comment: req.body.comment,
      application: req.body.id,
    });

    const saveComment = await newComment.save();

    // Update the application document with the comment ID
    await updateApplicationWithComment(
      req.body.id,
      saveComment._id,
      req.body.status
    );

    res.status(201).json({
      success: true,
      saveComment,
    });
  } catch (error) {
    console.error("Error saving job application:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAppliedJobs = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch applied jobs for the user and populate the 'user' field to get user details
    const appliedJobs = await ApplicationModels.find({ user: userId }).populate(
      "user"
    );

    res.status(200).json(appliedJobs);
  } catch (error) {
    console.error("Error fetching applied jobs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
