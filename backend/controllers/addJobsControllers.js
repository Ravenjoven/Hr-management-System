const addJobsModels = require("../models/addJobsModels");
const { validationResult } = require("express-validator");

exports.createJobs = async (req, res, next) => {
  //   console.log(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(500).send("Missing parameters");
  }

  try {
    const job = await addJobsModels.create({
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
    res.status(201).json({
      success: true,
      job,
    });
  } catch (error) {
    next(error);
  }
};
