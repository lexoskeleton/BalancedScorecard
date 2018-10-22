const router = require("express").Router();
const db = require("../../models");

router.route("/").get(function(req, res) {
  db.User.find({})
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
