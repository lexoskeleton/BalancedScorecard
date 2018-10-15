const router = require("express").Router();
const bscRoutes = require("./bsc.js");

// Authorization routes
router.use("/bsc", bscRoutes);

module.exports = router;
