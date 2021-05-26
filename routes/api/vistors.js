const router = require("express").Router();
const visitorsController = require("../../controllers/visitorsController");

// Matches with "/api/visitors"
router.route("/")
  // .get(visitorsController.findAll)
  // .post(visitorsController.create);

// Matches with "/api/visitors/:id"
router
  // .route("/:id")
  // .get(visitorsController.findById)
  // .put(visitorsController.update)
  // .delete(visitorsController.remove);

module.exports = router;
