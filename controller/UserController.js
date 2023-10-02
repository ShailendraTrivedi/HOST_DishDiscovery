const UserModel = require("./../modals/UserSchema");
const {
  generateAuthToken,
  verifyAuthToken,
} = require("../middlewares/authentication");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const generateShortUUID = () => {
  const fullUUID = uuidv4();
  const digitsOnly = fullUUID.replace(/\D/g, "");
  const shortUUID = digitsOnly.substring(0, 6);
  return shortUUID;
};

/** http://localhost:5000/foodieuser/register */
const UserRegister = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userWithEmail = await UserModel.findOne({ email });

    if (userWithEmail) {
      return res.status(400).json({ message: "User already exists" });
    }

    const username = `${email.split("@")[0]}_${generateShortUUID()}`;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      email,
      username,
      password: hashedPassword,
    });

    const result = await newUser.save();

    if (result) {
      return res.status(201).json({ message: "User Registered" });
    } else {
      return res.status(500).json({ message: "User registration failed" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

/** http://localhost:5000/foodieuser/login */
const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "No User Found" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect Password" });
    }

    const userObject = user.toObject();
    delete userObject.password;
    return res.status(200).json(userObject);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error while searching the user in the database" });
  }
};

module.exports = {
  UserRegister,
  UserLogin,
};
