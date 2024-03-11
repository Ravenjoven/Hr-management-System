//this is add category routes created by ranel
const express = require("express");
const {
  addEvent,
  getEvent
} = require("../controllers/eventControllers");
const router = express.Router();

//add event routes
router.post("/event/addevent", addEvent);

//fetch event routes
router.get("/event/getevent", getEvent);

module.exports = router;
