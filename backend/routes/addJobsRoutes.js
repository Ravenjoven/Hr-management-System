const express = require("express");
const { createJobs, getJobs } = require("../controllers/addJobsControllers");
const router = express.Router();

//add job routes
router.post("/jobs/add", createJobs);

//fetch job routes
router.get("/jobs/get", getJobs);

module.exports = router;
