const router = require("express").Router();
const bookRoutes = require("./vistors");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
