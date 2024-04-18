const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/productsRoute");
const app = express();
const productModel = require("./models/productsModel");

const url =
  "mongodb+srv://reactpart1course:pvQrPJUbUvO2sP4F@cluster0.htxxs2c.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0";
const dataBaseName = "AmazonBackend";
const dbLink = url.replace("$_DB_NAME_$", dataBaseName);

mongoose.connect(dbLink).then(() => console.log("Connected!"));

app.use("/api/products", productRouter);

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
