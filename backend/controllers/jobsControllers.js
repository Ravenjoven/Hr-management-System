//this is add category created by ranel
const JobsModels = require("../models/JobsModels");
const CategoryModels = require("../models/CategoryModels");
const ApplicationModels = require("../models/ApplicationModels");
const UsersModels = require("../models/UsersModels");
const CommentModels = require("../models/CommentModels");
const { validationResult } = require("express-validator");

exports.createJobs = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(500).send("Missing parameters");
  }

  try {
    // Check if the provided category exists in the database
    let category = await CategoryModels.findOne({
      jobCategory: req.body.jobCategory,
    });
    if (!category) {
      // If the category doesn't exist, create it
      category = await CategoryModels.create({
        jobCategory: req.body.jobCategory,
      });
    }

    // Create the job
    const job = await JobsModels.create({
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
    const jobs = await JobsModels.find().sort({ createdAt: -1 });

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
    const updatedJob = await JobsModels.findOneAndUpdate(
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
    const deletedJob = await JobsModels.deleteOne({ _id: req.body.jobId });

    if (deletedJob.deletedCount === 0) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }

    await CategoryModels.updateMany(
      { jobs: req.body.jobId },
      { $pull: { jobs: req.body.jobId } }
    );

    await ApplicationModels.updateMany(
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
    const applicant = await ApplicationModels.find({ Status: "Applied" });

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

exports.getPendingApplicant = async (req, res, next) => {
  try {
    const applicant = await ApplicationModels.find({ Status: "Pending" });

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

exports.getComment = async (req, res, next) => {
  const id = req.params.id;

  try {
    const comments = await CommentModels.find({ application: id });

    if (!comments || comments.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No applicant comment found" });
    }

    res.status(200).json({ success: true, comments });
  } catch (error) {
    next(error);
  }
};

exports.getUserJobs = async (req, res, next) => {
  try {
    const userId = req.params.id;

    // Find the user
    const user = await UsersModels.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "No user found" });
    }

    // Retrieve application IDs associated with the user
    const applicationIds = user.application;

    // Find applications based on application IDs
    const applications = await ApplicationModels.find({
      _id: { $in: applicationIds },
    });

    if (!applications || applications.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No applications found for this user",
      });
    }

    // Extract job IDs from all found applications
    const jobIds = applications.map((application) => application.jobs).flat();

    // Find jobs based on job IDs
    const jobs = await JobsModels.find({
      _id: { $in: jobIds },
    });

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No jobs found for this user",
      });
    }

    res.status(200).json({ success: true, jobs });
  } catch (error) {
    console.error("Failed to get jobs:", error);
    res.status(500).send("Server error");
  }
};
