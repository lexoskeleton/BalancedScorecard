const router = require("express").Router();
const fileInputRoutes = require("./fileInputRoutes");

router.use("/fileInput", fileInputRoutes);

module.exports = router;