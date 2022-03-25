const ErrorResponse = require("../utils/errorResponse");
const Products = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  res.send("create");
};

exports.readProduct = async (req, res, next) => {
  res.send("read");
};

exports.updateProduct = async (req, res, next) => {
  res.send("update");
};

exports.deleteProduct = async (req, res, next) => {
  res.send("delete");
};
