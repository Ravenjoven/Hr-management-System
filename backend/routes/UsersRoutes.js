//this is add jobs routes created by ranel
const express = require("express");
const {
  createEmployee,
  getAllUsers,
  getEmployee,
  registerUser
} = require("../controllers/UsersControllers");
const router = express.Router();

//create employee routes
router.post("/user/add", createEmployee);

//get all users
router.get("/user/getAllUsers", getAllUsers);

//get employee
router.get("/user/getEmployee", getEmployee);

// Route to handle POST requests to save registration data
router.post("/registrations", registerUser);

module.exports = router;
