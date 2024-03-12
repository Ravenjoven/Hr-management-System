//this is add jobs routes created by ranel
const express = require("express");
const {
  createJobs,
  getJobs,
  editJobs,
  deleteJobs,
} = require("../controllers/addJobsControllers");
const router = express.Router();

//add job routes
router.post("/jobs/add", createJobs);

//fetch job routes
router.get("/jobs/get", getJobs);

//edit job routes
router.put("/jobs/edit", editJobs);

//delete job routes
router.delete("/jobs/delete", deleteJobs);

module.exports = router;
