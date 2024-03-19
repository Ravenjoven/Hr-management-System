// routes/jobApplicationRoutes.js

const express = require("express");
const router = express.Router();
const {
  createJobApplication,
  saveFiles,
  getFiles,
  updateApplicant,
} = require("../controllers/ApplicationControllers");

// Route to create a new job application
router.post("/apply", createJobApplication);

router.post("/saveFiles", saveFiles);

router.get("/getFiles/:userId/:filename", getFiles);

router.put("/updateApplicant", updateApplicant);

module.exports = router;
