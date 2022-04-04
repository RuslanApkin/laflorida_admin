const ErrorResponse = require("../utils/errorResponse");
const Products = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  const { title, description, price, status, category, image, composition } =
    req.body;

  if (!title || !price || !status) {
    return next(new ErrorResponse("Не все поля заполненны", 400));
  }

  const product = await Products.findOne({ title });

  if (product) {
    return next(
      new ErrorResponse("Товар с таким названием уже существует", 401)
    );
  }

  try {
    const product = Products.create({
      title,
      description,
      price,
      status,
      category,
      image,
      composition,
    });
    res.status(200).json({ success: true, data: "Товар добавлен" });
  } catch (err) {
    next(err);
  }
};

exports.readProduct = async (req, res, next) => {
  const filter = req.body;

  try {
    const query = await Products.find(filter);
    if (!query.length) {
      return next(new ErrorResponse("Товар не найден", 404));
    }
    res.status(200).json({ success: true, data: query });
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  const _id = req.params.id;
  const updatedInfo = req.body;
  if (!_id || !updatedInfo) {
    return next(new ErrorResponse("Не все поля заполненны", 400));
  }
  try {
    const response = await Products.updateOne({ _id }, updatedInfo);
    if (!response.matchedCount) {
      return next(new ErrorResponse("Товар не найден", 404));
    }
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { deletable } = req.body;
  try {
    const response = await Products.deleteMany({ _id: deletable });
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

exports.uploadImage = async (req, res, next) => {};
