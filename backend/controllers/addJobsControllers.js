//this is add category created by ranel
const addJobsModels = require("../models/addJobsModels");
const addCategoryModels = require("../models/addCategoryModels");
const jobApplicationModels = require("../models/jobApplicationModels");
const { validationResult } = require("express-validator");

exports.createJobs = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(500).send("Missing parameters");
  }

  try {
    // Check if the provided category exists in the database
    let category = await addCategoryModels.findOne({
      jobCategory: req.body.jobCategory,
    });
    if (!category) {
      // If the category doesn't exist, create it
      category = await addCategoryModels.create({
        jobCategory: req.body.jobCategory,
      });
    }

    // Create the job
    const job = await addJobsModels.create({
      category: category._id,
      jobName: req.body.jobName,
      jobDescription: req.body.jobDescription,
      jobType: req.body.jobType,
      jobSlots: req.body.jobSlots,
      jobCategory: req.body.jobCategory,
      jobSkills: req.body.jobSkills,
      jobSetUp: req.body.jobSetUp,
      jobExperience: req.body.jobExperience,
      jobFromSalary: req.body.jobFromSalary,
      jobToSalary: req.body.jobToSalary,
    });

    // Associate the job with the category
    category.jobs.push(job._id);
    await category.save();

    // Now, you can also associate job applications with the job
    const jobApplications = req.body.jobApplications; // Assuming you have an array of job application IDs in the request body

    if (jobApplications && jobApplications.length > 0) {
      // Add references to job applications to the job document
      job.applications = jobApplications;
      await job.save();
    }

    res.status(201).json({
      success: true,
      job,
    });
  } catch (error) {
    next(error);
  }
};

exports.getJobs = async (req, res, next) => {
  try {
    const jobs = await addJobsModels.find().sort({ createdAt: -1 });

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ success: false, message: "No jobs found" });
    }

    res.status(200).json({ success: true, jobs });
  } catch (error) {
    next(error);
  }
};

exports.editJobs = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ success: false, message: "Missing parameters" });
  }

  try {
    const updatedJob = await addJobsModels.findOneAndUpdate(
      { _id: req.body.jobId },
      {
        $set: {
          jobName: req.body.jobName,
          jobDescription: req.body.jobDescription,
          jobType: req.body.jobType,
          jobSlots: req.body.jobSlots,
          jobCategory: req.body.jobCategory,
          jobSkills: req.body.jobSkills,
          jobSetUp: req.body.jobSetUp,
          jobExperience: req.body.jobExperience,
          jobFromSalary: req.body.jobFromSalary,
          jobToSalary: req.body.jobToSalary,
        },
      },
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    res.status(200).json({ success: true, job: updatedJob });
  } catch (error) {
    next(error);
  }
};

exports.deleteJobs = async (req, res, next) => {
  try {
    const deletedJob = await addJobsModels.deleteOne({ _id: req.body.jobId });

    if (deletedJob.deletedCount === 0) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    await addCategoryModels.updateMany(
      { jobs: req.body.jobId },
      { $pull: { jobs: req.body.jobId } }
    );

    await jobApplicationModels.updateMany(
      { jobs: { $in: [req.body.jobId] } },
      { $pull: { jobs: req.body.jobId } }
    );

    res
      .status(200)
      .json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    next(error);
  }
};

exports.getApplicant = async (req, res, next) => {
  try {
    const applicant = await jobApplicationModels.find();

    if (!applicant || applicant.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No applicant found" });
    }

    res.status(200).json({ success: true, applicant });
  } catch (error) {
    next(error);
  }
};
