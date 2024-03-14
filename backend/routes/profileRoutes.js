//this is add category routes created by ranel
const express = require("express");
const {
  addProfile,
//   getEvent
} = require("../controllers/profileControllers");
const router = express.Router();

//add profile routes
router.post("/profile/addProfile", addProfile);

//fetch event routes
// router.get("/profile/getProfile", getProfile);

module.exports = router;
