const express = require("express");
const getAllProducts = require("../controllers/productsController");
const productRouter = express.Router();

productRouter.route("/").get(getAllProducts);

module.exports = productRouter;
