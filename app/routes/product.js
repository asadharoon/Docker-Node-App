const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
router.route("/listAll").get(productController.listAllProds);
router.route("/listProdWithCat").get(productController.listProdWithCat);

module.exports = { router, basePath: "products" };
