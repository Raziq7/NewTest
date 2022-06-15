const express = require("express");
const {
  addProduct,
  productShow,
  editProductShow,
  deletePro,
  EditPostDetails,
} = require("../controllers/adminRouterControl");
const { authenticateTokenVerify } = require("../Middleware/auth");
const router = express.Router();

router.route("/addProduct").post(addProduct);
//show product
router.route("/productShow").get(authenticateTokenVerify, productShow);

//edit Product
router.route("/editProductShow/").get(editProductShow);

//deletePro
router.route("/deletePro/").delete(deletePro);

//EditPostDetails
router.route("/EditPostDetails/").put(EditPostDetails);

module.exports = router;
