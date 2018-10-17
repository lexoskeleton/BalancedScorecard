const router = require("express").Router();
const db = require("../../models");

router.route("/")
  .get(function (req, res) {
    db.KPI.aggregate(
      [{
        $group: { _id: null, 
        totalProfit: { $sum: "$totalProfit" }, 
        totalRevenue: { $sum: "$totalRevenue" }, 
        totalSales: { $sum: "$totalSales" }, 

        }
      }
    ], function (err, dbKPI){
        if (err) {
          console.log(err);
          return;
      }
        res.json(dbKPI);
      })
  })

  module.exports = router;
