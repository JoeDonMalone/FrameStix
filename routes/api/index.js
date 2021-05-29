const router = require("express").Router();
const visitorRoutes = require("./vistors");

// Book routes
router.use("/visitors", visitorRoutes);

module.exports = router;
