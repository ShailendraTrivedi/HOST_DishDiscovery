const { Router } = require("express");
const {
  getUserRecipe,
  AddRecipe,
  getAllRecipe,
  getAllRecipeByCategory,
} = require("../controller/RecipeController");

const RecipeRouter = Router();

RecipeRouter.route("/add-blog").post(AddRecipe);
RecipeRouter.route("/get-user-blogs/:id").get(getUserRecipe);
RecipeRouter.route("/get-all-recipe").get(getAllRecipe);
RecipeRouter.route("/get-all-recipe-by-category/:category").get(
  getAllRecipeByCategory
);
module.exports = RecipeRouter;
