const router = require("express").Router();
const userController = require("../controller/userController");
userController.createTable()
router.route("/addUser").post(userController.postUser)
router.route("/allUsers").get(userController.getAllUsers);
router.route("/delUserbyID").delete(userController.deleteUserbyID);
router.route("/getUserbyName/:username").get(userController.getUserbyName);
module.exports = {
    router, basePath: "users"
}