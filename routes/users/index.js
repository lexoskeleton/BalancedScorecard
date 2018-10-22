const router = require("express").Router();
const usersDataRoutes = require("./usersDataRoutes.js");

// Authorization routes
router.use("/users", usersDataRoutes);

module.exports = router;
