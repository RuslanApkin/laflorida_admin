const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    requireed: [true, "Please provide categori name"],
    unique: true,
  },
  sections: {
    type: [String],
  },
});
