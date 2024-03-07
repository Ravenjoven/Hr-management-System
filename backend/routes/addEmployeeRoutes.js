//this is add jobs routes created by ranel
const express = require("express");
const {
  createEmployee,
  getEmployee,
} = require("../controllers/addEmployeeController");
const router = express.Router();

//create employee routes
router.post("/employee/add", createEmployee);

router.get("/employee/getEmployee", getEmployee);

module.exports = router;
