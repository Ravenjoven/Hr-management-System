//this is add category routes created by ranel
const express = require("express");
const {
  createCategory,
  getCategory,
  getJobs,
  getJob,
} = require("../controllers/CategoryControllers");
const router = express.Router();

//add category routes
router.post("/jobs/addcategory", createCategory);

//fetch category routes
router.get("/jobs/getCategory", getCategory);

//fetch all jobs in category
router.get("/jobs/getJobs/:id", getJobs);

//fetch individual job
router.get("/jobs/getJob/:id", getJob);

module.exports = router;
