const mongoose = require("mongoose");

// Define the Comment schema
const commentSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

// Define the Recipe schema
const recipeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  publishDate: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  cookingTime: {
    type: String,
    required: true,
  },
  comments: {
    type: [commentSchema],
    required: false,
    default: null
  },
  likes: {
    type: String,
    required: false,
    default: 0,
  },
});

// Create the Recipe model
const RecipeModel = mongoose.model("Recipe", recipeSchema);

module.exports = RecipeModel;
