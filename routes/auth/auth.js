const router = require("express").Router();
const authController = require("../../controllers/authController");

router.route("/register").post(authController.save);
router.route("/login").post(authController.findOne);

module.exports = router;
