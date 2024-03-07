//this is add category routes created by ranel
const express = require("express");
const {
  addUser,
  getUser
} = require("../controllers/addUserCrontoller");
const router = express.Router();

//add user routes
router.post("/user/adduser", addUser);

//fetch user routes
router.get("/user/getuser", getUser);

module.exports = router;
