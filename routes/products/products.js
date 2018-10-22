const router = require("express").Router();
const db = require("../../models");

router.route("/")
    .get(async (req, res) => {
      db.KPI.find()
      .then(products => {
          res.json(products)
    })
  });


module.exports = router;