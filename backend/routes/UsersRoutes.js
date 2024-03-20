//this is add jobs routes created by ranel
const express = require("express");
const {
  createEmployee,
  getAllUsers,
  getEmployee,
  signinUser,
  registerUser,
  getUser,
} = require("../controllers/UsersControllers");
const router = express.Router();

//create employee routes
router.post("/user/add", createEmployee);

//get all users
router.get("/user/getAllUsers", getAllUsers);

//get employee
router.get("/user/getEmployee", getEmployee);

// route to handle login
router.post("/user/signin", signinUser);

// Route to handle POST requests to save registration data
router.post("/user/registration", registerUser);

router.get("/user/getUser/:id",getUser)

module.exports = router;
