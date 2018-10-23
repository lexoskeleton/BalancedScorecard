const router = require("express").Router();
// const csv = require("csvtojson");
const db = require("../../models");
// const path = require("path");
// const csvFilePath = path.join(__dirname, "../../assets/data.csv");

// Matches with "/api/kpis"
router.route("/fileinput").post(async (req, res) => {
  // const jsonArray = await csv().fromFile(csvFilePath);
  // res.json(jsonArray);
  console.log(req.body);
  //res.json(req.body);
  db.KPI.deleteMany({})
  .then(result => db.KPI.create(req.body))
  .then(result => res.json(result))
  .catch(err => res.status(422).json(err));
});

module.exports = router;
