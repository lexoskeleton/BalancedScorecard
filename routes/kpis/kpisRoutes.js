const router = require("express").Router();
const csv = require("csvtojson");
const db = require("../../models");
const path = require("path");
const csvFilePath = path.join(__dirname, "../../assets/data.csv");

// Matches with "/api/kpis"
router.route("/").get(async (req, res) => {
  const jsonArray = await csv().fromFile(csvFilePath);
  db.KPI.create(jsonArray)
    .then(dbModel => {
      res.json(dbModel);
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;
