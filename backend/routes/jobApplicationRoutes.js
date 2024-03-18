// routes/jobApplicationRoutes.js

const express = require("express");
const router = express.Router();
const {
  createJobApplication,
  saveFiles,
  getFiles,
} = require("../controllers/jobApplicationController");

// Route to create a new job application
router.post("/apply", createJobApplication);

router.post("/saveFiles", saveFiles);

router.get("/getFiles/:userId/:filename", getFiles);

module.exports = router;
