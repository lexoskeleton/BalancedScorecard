const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth");
const contactRoutes = require("./contact");
const kpisRoutes = require("./kpis");
const bscRoutes = require("./bsc");
const taskRoutes = require("./task");
// const fileInputRoutes = require("./fileInput");

// API Routes
router.use("/api", authRoutes);
router.use("/api", contactRoutes);
router.use("/api", kpisRoutes);
router.use("/api", bscRoutes)
router.use("/api", taskRoutes)
// router.use("api", fileInputRoutes);

//// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
