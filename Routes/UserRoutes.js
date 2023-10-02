const { Router } = require("express");
const { UserRegister, UserLogin } = require("../controller/UserController");

const userRouter = Router();

userRouter.route("/register").post(UserRegister);
userRouter.route("/login").post(UserLogin);

module.exports = userRouter;
