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

router.route("/create").post(protect, createProduct);

router.route("/read").get(protect, readProduct);

router.route("/update/:id").put(protect, updateProduct);

router.route("/delete").delete(protect, deleteProduct);

module.exports = router;
