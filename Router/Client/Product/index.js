const express = require("express");
const router = express.Router();
const ProductController = require("../../../Controller/Product/ProductController");

router.post("/", ProductController.store);

module.exports = router;
