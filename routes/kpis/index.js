const router = require("express").Router();
const kpisRoutes = require("./kpisRoutes");

router.use("/kpis", kpisRoutes);

module.exports = router;
