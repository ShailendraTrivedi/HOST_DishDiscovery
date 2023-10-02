const RecipeRouter = require("../Routes/RecipeRoutes");
const RecipeModel = require("../modals/RecipeSchema");

/** GET: http://localhost:5000/foodieblog/add-blog */
const AddRecipe = async (req, res) => {
  try {
    const recipe = req.body;
    const newRecipe = new RecipeModel(recipe);
    const result = await newRecipe.save();
    return res.status(200).json({ message: "Blog Added Successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong", error: err });
  }
};

/** GET: http://localhost:5000/foodieblog/get-user-blogs/:id */
const getUserRecipe = async (req, res) => {
  try {
    const username = req.params.id;
    const userRecipes = await RecipeModel.find({ username });

    if (!userRecipes || userRecipes.length === 0) {
      return res
        .status(404)
        .json({ message: "No Recipes Found for this User" });
    }

    return res.status(200).json(userRecipes);
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

/** GET: http://localhost:5000/foodieblog/get-all-recipe */
const getAllRecipe = async (req, res) => {
  try {
    const allRecipes = await RecipeModel.find();

    if (!allRecipes || allRecipes.length === 0) {
      return res.status(404).send({ error: "No Recipe Found!" });
    }

    return res.status(200).json(allRecipes);
  } catch (error) {
    return res.status(500).send({ error: "Something went wrong!" });
  }
};

/** GET: http://localhost:5000/foodieblog/get-all-recipe-by-category/:category */
const getAllRecipeByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const allRecipeCategory = await Recipe.find({ category });
    if (!allRecipeCategory || allRecipeCategory.length === 0) {
      return res
        .status(404)
        .send({ error: "No recipes found for this category." });
    }
    return res.status(200).send(allRecipeCategory);
  } catch (error) {
    return res.status(500).send({ error: "Something went wrong!" });
  }
};

module.exports = {
  AddRecipe,
  getUserRecipe,
  getAllRecipe,
  getAllRecipeByCategory,
};
