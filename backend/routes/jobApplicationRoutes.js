// routes/jobApplicationRoutes.js

const express = require("express");
const router = express.Router();
const {
  createJobApplication,
} = require("../controllers/jobApplicationController");

// Route to create a new job application
router.post("/apply/jobs", createJobApplication);

module.exports = router;
