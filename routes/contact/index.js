const router = require("express").Router();
const contactRoutes = require("./contact");

// Contact message routes
router.use("/contact", contactRoutes);

module.exports = router;
