// routes/jobApplicationRoutes.js

const express = require("express");
const router = express.Router();
const jobApplicationController = require("../controllers/jobApplicationController");

// Route to create a new job application
router.post("/apply", jobApplicationController.createJobApplication);

module.exports = router;
