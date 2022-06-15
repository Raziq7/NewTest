const asyncHandler = require("express-async-handler");
const Product = require("../Model/ProductModel");
const User = require("../Model/userRegisterModel");
const generatorToken = require("../util/generatorJwt");
module.exports = {
  registerSubmit: asyncHandler(async (req, res) => {
    const { name, password, email } = req.body;
    let Exist = await User.findOne({ email });
    if (!Exist) {
      let signIn = await User.create({ name, email, password });
      res.json({ signIn, Token: generatorToken(signIn) });
    } else {
      res.status(401);
      throw new Error("User Already Exist");
    }
  }),

  loginSubmit: asyncHandler(async (req, res) => {
    console.log(req.body, "===-------------");
    const { email, password } = req.body;
    let Exist = await User.findOne({ email, password });
    console.log(Exist, "===-------------");
    if (Exist) {
      res.json({ Exist, Token: generatorToken(Exist) });
    } else {
      res.status(401);
      throw new Error("Invalid Password or Email");
    }
  }),

  ShowAllPro: asyncHandler(async (req, res) => {
    let ProductDetail = await Product.find({});
    console.log(ProductDetail, "===-------------");

    res.json(ProductDetail);
  }),

  addToCartPro: asyncHandler(async (req, res) => {
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
};
