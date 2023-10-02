const mongoose = require("mongoose");
const { ATLAS_DATABASE_URL } = require("../constant");
// Connect to the MongoDB database
const url = `${ATLAS_DATABASE_URL}/DishDiscovery`;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: { w: "majority" },
  })
  .then(() => {
    console.log("Database connection successfully !");
  })
  .catch(() => {
    console.log("Database connection error !");
  });
