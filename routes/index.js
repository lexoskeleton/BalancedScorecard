const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth");
const contactRoutes = require("./contact");

// API Routes
router.use("/api", authRoutes);
router.use("/api", contactRoutes);

//// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
