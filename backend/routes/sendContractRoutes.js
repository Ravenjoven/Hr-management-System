const express = require("express");
const { uploadFiles } = require("../controllers/sendContractControllers");
const router = express.Router();

// Route to fetch all users
router.post("/sendmail", uploadFiles);

module.exports = router;
