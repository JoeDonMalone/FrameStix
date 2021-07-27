const router = require("express").Router();
const visitorRoutes = require("./visitors");

// Book routes
router.use("/visitors", visitorRoutes);

module.exports = router;
