const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  index: {
    type: Number,
    index: true,
  },
  title: {
    type: String,
    required: [true, "Пожалуйста введите название"],
    unique: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Укажите цену"],
  },
  status: {
    type: String,
    required: [true, "Укажите статус"],
  },
  //   category: {
  //     type: [mongoose.Schema.Types.ObjectId],
  //     required: [true, "Укажите категорию"],
  //   },
  //   composition: {
  //     type: [mongoose.Schema.Types.ObjectId],
  //   },
  //   imgUrl: {
  //     type: String,
  //   },
  //   author: {
  //     type: mongoose.Schema.Types.ObjectId,
  //   },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
