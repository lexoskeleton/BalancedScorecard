const router = require("express").Router();
const csv = require('csvtojson');
const csvFilePath = "../../assets/data.csv";
const db = require("../../models");

// Matches with "/api/kpis"

router
  .route("/")
  .post(function (req, res) {
    csv()
      .fromFile(csvFilePath)
      .then(jsonObj => {
        db.KPI.create(jsonObj)
      })
      .then(dbModel => res.json(dbModel))
  });

module.exports = router;
