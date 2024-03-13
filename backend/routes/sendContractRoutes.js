const express = require("express");
const { uploadFiles } = require("../controllers/sendContractControllers");
const router = express.Router();

router.post("/sendemail", uploadFiles);

module.exports = router;
