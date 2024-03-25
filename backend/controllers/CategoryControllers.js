//this is add job controller created by ranel
const JobsModels = require("../models/JobsModels");
const CategoryModels = require("../models/CategoryModels");
const { validationResult } = require("express-validator");

exports.createCategory = async (req, res, next) => {
  console.log(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(500).send("Missing parameters");
  }

  try {
    // Create the category
    const category = await CategoryModels.create({
      jobCategory: req.body.jobCategory,
    });

    // Fetch the IDs of the jobs associated with the category from the request body
    const jobIds = req.body.jobs;

    // Update the category with the IDs of the associated jobs
    if (jobIds && jobIds.length > 0) {
      await JobsModels.updateMany(
        { _id: { $in: jobIds } },
        { $addToSet: { jobCategory: category._id } } // Associate each job with the category
      );
    }

    res.status(201).json({
      success: true,
      category,
    });
  } catch (error) {
    next(error);
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const category = await CategoryModels.find();

    if (!category || category.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No category found" });
    }

    res.status(200).json({ success: true, category });
  } catch (error) {
    next(error);
  }
};

//get all the jobs
exports.getJobs = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const category = await CategoryModels.findById(categoryId);

    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "No category found" });
    }

    const jobsIds = category.jobs;

    const jobs = await JobsModels.find({
      _id: { $in: jobsIds },
    });

    if (!jobs || jobs.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No jobs found for this category" });
    }
    res.status(200).json({ success: true, jobs });
  } catch (error) {
    console.error("Failed to get jobs:", error);
    res.status(500).send("Server error");
  }
};

//get specific job
exports.getJob = async (req, res, next) => {
  const jobId = req.params.id;

  try {
    const job = await JobsModels.findById(jobId);

    if (!job || job.length === 0) {
      return res.status(404).json({ success: false, message: "No job found" });
    }

    res.status(200).json({ success: true, job });
  } catch (error) {
    next(error);
  }
};
