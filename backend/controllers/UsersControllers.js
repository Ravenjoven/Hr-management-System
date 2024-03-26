const authUser = "harunaharuko141@gmail.com";
const authPass = "gesb yrcj hbfr jfze";
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fs = require("fs");
const ejs = require("ejs");
const app = express();
const UsersModels = require("../models/UsersModels");
const bcrypt = require("bcrypt");

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

const { validationResult } = require("express-validator");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: authUser,
    pass: authPass,
  },
});

exports.createEmployee = async (req, res, next) => {
  const link = "http://localhost:5173/login";
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(500).send("Missing parameters");
  }

  try {
    // Create the employee
    const employee = await UsersModels.create({
      fullname: req.body.fullname,
      dateOfBirth: req.body.dateOfBirth,
      email: req.body.email,
      password: "7110eda4d09e062aa5e4a390b0a572ac0d2c0220f5f89400", // 1234 hashed password
      phoneNumber: req.body.phoneNumber,
      jobSkills: req.body.jobSkills,
      position: req.body.position,
      type: req.body.type,
      address: req.body.address,
      status: "Employee",
    });

    const fullName = req.body.fullname;
    const spaceIndex = fullName.indexOf(" ");

    let firstName;
    if (spaceIndex !== -1) {
      firstName = fullName.substring(0, spaceIndex);
    } else {
      // If there is no space, assume the entire string is the first name
      firstName = fullName;
    }

    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    const currentDate = new Date();
    const formattedDate = currentDate
      .toString()
      .split(" ")
      .slice(0, 4)
      .join(" ");

    // Render the email template
    const template = fs.readFileSync("./ejs/welcome_email.ejs", "utf-8");
    const htmlContent = ejs.render(template, {
      firstname: firstName,
      email: req.body.email,
      name: authUser,
      date: formattedDate,
    });

    // Send welcome email
    const info = await transporter.sendMail({
      from: authUser,
      to: req.body.email,
      subject: "Welcome To Teravault",
      html: htmlContent,
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

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await UsersModels.find();

    if (!users || users.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No users found" });
    }

    res.status(200).json({ success: true, users });
  } catch (error) {
    next(error);
  }
};

exports.getEmployee = async (req, res, next) => {
  try {
    const employee = await UsersModels.find({ status: "Employee" });

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

exports.signinUser = async (req, res, next) => {
  try {
    const emails = req.body.email;
    const password = req.body.password;

    // Find user by email
    const user = await UsersModels.findOne({ email: emails });

    // Check if user exists
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Check if the provided password matches the stored password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }

    const stat = user.status;
    const id = user._id;
    res.status(200).json({ success: true, stat, id });
  } catch (error) {
    next(error);
  }
};

exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try {
    // Create a new registration document
    const newRegistration = new UsersModels({
      fullname: req.body.fullName,
      phoneNumber: req.body.contactNumber,
      email: req.body.email,
      password: hashedPassword,
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.gender,
      jobSkills: [],
      position: "NA",
      type: "NA",
      address: "NA",
      status: "User",
    });

    // Save the new registration document to the database
    await newRegistration.save();

    // Respond with a success message
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    // Handle any errors
    console.error("Registration failed:", error);
    res.status(500).json({ error: "Registration failed" });
  }
};

exports.getUser = async (req, res, next) => {
  const id = req.params.id;
  console.log(id)
  try {
    
    const users = await UsersModels.findById(id);

    if (!users || users.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No users found" });
    }

    res.status(200).json({ success: true, users });
  } catch (error) {
    next(error);
  }
};
