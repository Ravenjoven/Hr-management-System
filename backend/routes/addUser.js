//this is add category routes created by ranel
const express = require("express");
const {
  addUser,
  
} = require("../controllers/addUserCrontoller");
const router = express.Router();

//add user routes
router.post("/user/addUser", addUser);

//fetch user routes
// router.get("/user/getUser", getUser);

module.exports = router;
