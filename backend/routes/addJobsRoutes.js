//this is add jobs routes created by ranel
const express = require("express");
const {
  createJobs,
  getJobs,
  deleteJobs,
} = require("../controllers/addJobsControllers");
const router = express.Router();

//add job routes
router.post("/jobs/add", createJobs);

//fetch job routes
router.get("/jobs/get", getJobs);

router.delete("/jobs/delete", deleteJobs);

module.exports = router;
