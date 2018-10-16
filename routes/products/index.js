const router = require("express").Router();
const productRoutes = require("./products.js");

// Authorization routes
router.use("/products", productRoutes);

module.exports = router;