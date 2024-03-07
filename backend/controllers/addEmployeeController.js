const authUser = "harunaharuko141@gmail.com";
const authPass = "gesb yrcj hbfr jfze";
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});
const addEmployeeModels = require("../models/addEmployeeModels");
const { validationResult } = require("express-validator");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: authUser,
    pass: authPass,
  },
});

exports.createEmployee = async (req, res, next) => {
  console.log(req.body);
  const subject = "Welcome To Teravault";
  const link = "http://localhost:5173/login";
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
      password: "7110eda4d09e062aa5e4a390b0a572ac0d2c0220f5f89400", // Example hashed password
      phoneNumber: req.body.phoneNumber,
      skills: req.body.jobSkills,
      position: req.body.position,
      type: req.body.type,
      address: req.body.address,
      status: 0,
    });

    // Send welcome email
    const info = await transporter.sendMail({
      from: authUser,
      to: req.body.email,
      subject: subject,
      text: `Welcome to Teravault! Please click the following link to log in: ${link} email: ${req.body.email} password: 1234`,
    });

    console.log("Message sent: %s", info.messageId);

    res.status(201).json({
      success: true,
      employee: employee,
    });
  } catch (error) {
    console.error("Error creating employee:", error);
    next(error);
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
