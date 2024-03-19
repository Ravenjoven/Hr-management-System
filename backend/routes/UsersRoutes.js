//this is add jobs routes created by ranel
const express = require("express");
const {
  createEmployee,
  getAllUsers,
  getEmployee,
} = require("../controllers/UsersControllers");
const router = express.Router();

//create employee routes
router.post("/user/add", createEmployee);

//get all users
router.get("/user/getAllUsers", getAllUsers);

//get employee
router.get("/user/getEmployee", getEmployee);

module.exports = router;
