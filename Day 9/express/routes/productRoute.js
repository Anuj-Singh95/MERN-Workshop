const express = require("express");
const {
  getAllProducts,
  addProduct,
} = require("../controller/productsController");
const productRouter = express.Router();

productRouter.route("/").get(getAllProducts).post(addProduct);

module.exports = productRouter;
