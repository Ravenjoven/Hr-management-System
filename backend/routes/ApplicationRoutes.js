// routes/jobApplicationRoutes.js

const express = require("express");
const router = express.Router();

// Route to fetch applied jobs for a user
const {
  createJobApplication,
  saveFiles,
  getFiles,
  movePending,
  getAppliedJobs,
} = require("../controllers/ApplicationControllers");

// Route to create a new job application
router.post("/apply", createJobApplication);

router.post("/saveFiles", saveFiles);

router.get("/getFiles/:userId/:filename", getFiles);

router.put("/movePending", movePending);

router.get("/getAppliedJobs/:userId", getAppliedJobs);

module.exports = router;
