const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide categori name"],
    unique: true,
  },
  level: {
    type: Number,
    required: true,
  },
  sections: {
    type: [mongoose.Schema.Types.ObjectId],
    unique: true,
  },
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
