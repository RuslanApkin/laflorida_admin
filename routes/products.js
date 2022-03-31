const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

// Controllers
const {
  createProduct,
  readProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.route("/create").post(createProduct);

router.route("/read").get(readProduct);

router.route("/update/:id").put(updateProduct);

router.route("/delete").delete(deleteProduct);

module.exports = router;
