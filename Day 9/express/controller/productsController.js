const fs = require("fs");

const getAllProducts = async (req, res) => {
  let data = await fs.readFileSync("./data.json", "utf-8");
  data = JSON.parse(data);
  res.json({
    status: "success",
    data,
  });
};
const addProduct = async (req, res) => {
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
};

module.exports = {
  getAllProducts,
  addProduct,
};
