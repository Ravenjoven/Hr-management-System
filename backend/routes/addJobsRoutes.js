const express = require("express");
const { createJobs } = require("../controllers/addJobsControllers");
const router = express.Router();

router.post("/jobs/add", createJobs);

module.exports = router;
