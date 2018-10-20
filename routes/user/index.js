const router = require("express").Router();
const userDataRoutes = require("./userData.js");

// Authorization routes
router.use("/userData", userDataRoutes);

module.exports = router;
