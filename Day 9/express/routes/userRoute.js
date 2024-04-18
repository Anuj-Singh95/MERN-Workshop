const express = require("express");
const {
  getUser,
  addUser,
  replaceUser,
  deleteUser,
} = require("../controller/usersController");
const userRouter = express.Router();

userRouter.route("/").get(getUser).post(addUser);

userRouter.route("/:id").put(replaceUser).delete(deleteUser);

module.exports = userRouter;
