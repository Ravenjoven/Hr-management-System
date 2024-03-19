//this is add jobs routes created by ranel
const express = require("express");
const {
  createJobs,
  getJobs,
  editJobs,
  deleteJobs,
  getApplicant,
} = require("../controllers/JobsControllers");
const router = express.Router();

//add job routes
router.post("/jobs/add", createJobs);

//fetch job routes
router.get("/jobs/get", getJobs);

//fetch applicant in jobs routes
router.get("/jobs/getApplicant", getApplicant);

//edit job routes
router.put("/jobs/edit", editJobs);

//delete job routes
router.delete("/jobs/delete", deleteJobs);

module.exports = router;
