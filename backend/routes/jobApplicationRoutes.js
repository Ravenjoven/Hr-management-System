// routes/jobApplicationRoutes.js

const express = require("express");
const router = express.Router();
const {
  createJobApplication,
  saveFiles,
} = require("../controllers/jobApplicationController");

// Route to create a new job application
router.post("/apply", createJobApplication);

router.post("/saveFiles", saveFiles);

module.exports = router;
