const express = require("express");
require("./config/db_config");
const { APP_PORT } = require("./constant");
const app = express();
const cors = require("cors");
const path = require("path");

//Middleware
app.use(cors());
app.use(express.json());

// Routes
const UserRoutes = require("./Routes/UserRoutes");
const RecipeRoutes = require("./Routes/RecipeRoutes");

app.use("/working", (req, res) => {
  return res.send("Working...");
});
app.use("/foodieuser", UserRoutes);
app.use("/foodieblog", RecipeRoutes);

app.listen(APP_PORT || 5000, () => {
  console.log(`PORT Connected : PORT`);
});
