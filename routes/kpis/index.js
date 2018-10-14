const router = require("express").Router();
const kpisRoutes = require("./kpisRoutes");

// Authorization routes
router.use("/kpis", kpisRoutes);

module.exports = router;
