//this is add job controller created by ranel
const addCategoryModels = require("../models/addCategoryModels");
const { validationResult } = require("express-validator");

exports.createCategory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(500).send("Missing parameters");
  }

  try {
    const job = await addCategoryModels.create({
      jobCategory: req.body.jobCategory,
    });
    res.status(201).json({
      success: true,
      job,
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
