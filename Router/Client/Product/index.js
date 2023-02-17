const express = require("express");
const router = express.Router();
const ProductController = require("../../../Controller/Product/ProductController");
const attachmentUpload = require("../../../Middleware/product/attachmentUpload");

router.post("/", attachmentUpload, ProductController.store);
router.get("/product/all", ProductController.getAll);

module.exports = router;
