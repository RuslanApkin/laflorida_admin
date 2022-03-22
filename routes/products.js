const express = require("express");
const router = express.Router();

// Controllers
const {
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/products");

router.route("/create").post(createProduct);

router.route("/read").post(readProduct);

router.route("/update").post(updateProduct);

router.route("/delete").put(deleteProduct);

module.exports = router;