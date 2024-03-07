//this is add category routes created by ranel
const express = require("express");
const {
  createCategory,
  getCategory,
} = require("../controllers/addCategoryController");
const router = express.Router();

//add category routes
router.post("/jobs/addcategory", createCategory);

//fetch category routes
router.get("/jobs/getCategory", getCategory);

module.exports = router;
