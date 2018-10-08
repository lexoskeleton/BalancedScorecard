const router = require("express").Router();
const contactController = require("../../controllers/contactController");
const passport = require("passport");
require("../../config/passport")(passport);

// Matches with "/api/contact"
router
  .route("/")
  .post(
    passport.authenticate("jwt", { session: false }),
    contactController.createContactMessage
  );

module.exports = router;
