const express = require("express");
const {
  registerSubmit,
  loginSubmit,
  ShowAllPro,
  addToCartPro,
} = require("../controllers/usersRouter");
const { authenticateTokenVerify } = require("../Middleware/auth");
const router = express.Router();

router.route("/").post(registerSubmit);

//login
router.route("/login").post(loginSubmit);

//ShowAllPro
router.route("/ShowAllPro").get(authenticateTokenVerify, ShowAllPro);

//addToCartPro
router.route("/addToCartPro/").get(authenticateTokenVerify, addToCartPro);

module.exports = router;
