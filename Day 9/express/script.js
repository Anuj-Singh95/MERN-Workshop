const express = require("express");
const app = express();
const fs = require("fs");
// const { stringify } = require('querystring');
app.use(express.json());
let i = 0;
app.get("/api/products", async (req, res) => {
  let data = await fs.readFileSync("./data.json", "utf-8");
  data = JSON.parse(data);
  res.json({
    status: "success",
    data,
  });
});

app.post("/api/products", async (req, res) => {
  const data = {
    id: 0,
    data: req.body,
  };
  const db = await fs.readFileSync("./data.json", "utf-8");
  const arr = JSON.parse(db);
  const len = arr.length;
  if (len == 0) {
    data.id = 1;
    arr.push(data);
    // console.log(arr);
  } else {
    console.log(arr);
    data.id = arr[len - 1].id + 1;
    arr.push(data);
  }
  fs.writeFileSync("./data.json", JSON.stringify(arr));

  // console.log(db);
  res.send("work in progress");
});

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
