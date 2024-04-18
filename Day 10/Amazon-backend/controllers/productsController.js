const getAllProducts = (req, res) => {
  res.send({
    status: "success",
    data: {
      products: [],
    },
  });
};

module.exports = getAllProducts;
