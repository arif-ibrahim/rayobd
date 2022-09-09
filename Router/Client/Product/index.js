const express = require("express");
const router = express.Router();
const ProductController = require("../../../Controller/Product/ProductController");
const attachmentUpload = require("../../../Middleware/product/attachmentUpload");

router.post("/", attachmentUpload, ProductController.store);

module.exports = router;
