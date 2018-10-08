const router = require("express").Router();
const authRoutes = require("./auth");

// Authorization routes
router.use("/auth", authRoutes);

module.exports = router;
