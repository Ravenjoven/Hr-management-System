//this is add job controller created by ranel
const addJobsModels = require("../models/addJobsModels");
const addCategoryModels = require("../models/addCategoryModels");
const { validationResult } = require("express-validator");

exports.createCategory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(500).send("Missing parameters");
  }

  try {
    // Create the category
    const category = await addCategoryModels.create({
      jobCategory: req.body.jobCategory,
    });

    // Fetch the IDs of the jobs associated with the category from the request body
    const jobIds = req.body.jobs;

    // Update the category with the IDs of the associated jobs
    if (jobIds && jobIds.length > 0) {
      await addJobsModels.updateMany(
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
    const category = await addCategoryModels.find();

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

exports.getJobs = async (req, res) => {
  try {
    const categoryId = req.params.id;

    const category = await addCategoryModels.findById(categoryId);

    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "No category found" });
    }

    const jobsIds = category.jobs;

    const jobs = await addJobsModels.find({
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
