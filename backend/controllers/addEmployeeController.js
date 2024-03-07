const addEmployeeModels = require("../models/addEmployeeModels");
const { validationResult } = require("express-validator");

exports.createEmployee = async (req, res, next) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(500).send("Missing parameters");
  }

  try {
    // Create the employee
    const employee = await addEmployeeModels.create({
      fullname: req.body.fullname,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      skills: req.body.jobSkills,
      position: req.body.position,
      type: req.body.type,
      address: req.body.address,
      status: 0,
    });

    res.status(201).json({
      success: true,
      employee: employee,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

exports.getEmployee = async (req, res, next) => {
  try {
    const employee = await addEmployeeModels.find();

    if (!employee || employee.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No employee found" });
    }

    res.status(200).json({ success: true, employee });
  } catch (error) {
    next(error);
  }
};
