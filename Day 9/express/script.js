const express = require("express");
const app = express();
const fs = require("fs");
const fsPromises = require("fs/promises");
const productRouter = require("./routes/productRoute");
const userRouter = require("./routes/userRoute");
// const { stringify } = require('querystring');
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

// app.use((req, res, next) => {
//   const time = new Date().toLocaleString();
//   fsPromises.appendFile("./log.txt", req.url + "\t");
// });

app.put("/api/products/:id", async (req, res) => {
  // res.send("work in progress");
  // const data = req.params.id;
  // console.log(data);
  // const db = await fs.readFileSync("./data.json", "utf-8");
  // const arr = JSON.parse(db);
});

app.delete("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const db = await fs.readFileSync("./data.json", "utf-8");
  const arr = JSON.parse(db);
  let idx = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == id) {
      idx = i;
      break;
    }
  }
  arr.splice(idx, 1);

  fs.writeFileSync("./data.json", JSON.stringify(arr));
  res.status(204);
  res.send({
    status: "success",
    message: "successfully deleted",
  });
});

app.listen(4000, (err) => {
  if (err) console.log(err.message);
  else console.log("server is running on port 4000");
});
