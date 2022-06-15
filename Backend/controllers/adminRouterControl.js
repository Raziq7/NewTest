const asyncHandler = require("express-async-handler");
const Product = require("../Model/ProductModel");

module.exports = {
  addProduct: asyncHandler(async (req, res) => {
    console.log(req.body, "asyncHandler");
    let { name, description, brand, price } = req.body;
    price = parseInt(price);

    let exist = await Product.findOne({ ProductName: name });

    console.log(exist, "existexist");
    if (exist) {
      res.status(401);
      throw new Error("Product Already Exist");
    } else {
      let product = await Product.create({
        ProductName: name,
        description,
        brand,
        price,
      });
      console.log(product, "productproductproduct");
      res.json(product);
    }
  }),

  productShow: asyncHandler(async (req, res) => {
    try {
      let exist = await Product.find({});
      console.log(exist, "userInfouserInfouserInfo");
      res.json(exist);
    } catch (error) {
      res.status(400);
      throw new Error(error);
    }
  }),

  editProductShow: asyncHandler(async (req, res) => {
    try {
      let { id } = req.query;
      console.log(id, "userInfouserInfouserInfo");
      let exist = await Product.findOne({ _id: id });
      console.log(exist, "userInfouserInfouserInfo");

      res.json(exist);
    } catch (error) {
      res.status(400);
      throw new Error(error);
    }
  }),

  deletePro: asyncHandler(async (req, res) => {
    try {
      let { id } = req.query;
      console.log(id, "userInfouserInfouserInfo");
      let exist = await Product.deleteOne({ _id: id });
      console.log(exist, "userInfouserInfouserInfo");

      res.json(exist);
    } catch (error) {
      res.status(400);
      throw new Error(error);
    }
  }),

  EditPostDetails: asyncHandler(async (req, res) => {
    try {
      console.log(req.body);
      let { _id, ProductName, description, brand, price } = req.body.detail;
      let exist = await Product.updateOne(
        { _id: req.query.id },
        {
          $set: { ProductName, description, brand, price },
        }
      );
      console.log(exist, "userInfouserInfouserInfo");

      res.json(exist);
    } catch (error) {
      res.status(400);
      throw new Error(error);
    }
  }),
};
