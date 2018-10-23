const router = require("express").Router();
const db = require("../../models");
const moment = require("moment");

router.route("/")
    .get(async (req, res) => {
      db.KPI.find()
      .then(products => {
          res.json(products)
    })
  });

  router.route("/dates")
  .get(async (req, res) => {
      db.KPI.find({}, 'date', function(err, dates) {
          res.json(dates);
      });
  })

router.route("/:month")
  .get(async (req, res) => {
    const month = req.params.month;
    const start = moment().month(month).startOf('month').toISOString();
    const end =  moment().month(month).endOf('month').toISOString();
    console.log("start is " + start);
    console.log("end is " + end);
    db.KPI.find({"date": {"$gte": start, "$lt": end}})
      .then(products => {
        res.json(products)
      })
  })


module.exports = router;