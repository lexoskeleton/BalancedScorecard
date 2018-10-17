const router = require("express").Router();
const bscRoutes = require("./bsc");

router.use("/bscd", bscRoutes);

module.exports = router;
