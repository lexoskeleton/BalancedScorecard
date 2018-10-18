const router = require("express").Router();
const taskRoutes = require("./task");

router.use("/task", taskRoutes);

module.exports = router;