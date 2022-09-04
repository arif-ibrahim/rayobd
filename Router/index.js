const express = require("express");
const router = express.Router();
const slug = require("../Common/Constants/slug");

// imports end
router.use(slug.CLIENT_SERVICES_ROOT_PATH, require("./Client"));

module.exports = router;
