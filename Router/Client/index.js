const express = require("express");
const router = express.Router();

router.use("/", require("./Product"));

module.exports = router;
