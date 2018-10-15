const router = require("express").Router();
const db = require("../../models");

router.route("/")
    .get(function(req, res){
        db.KPI.find({})
        .then(function(dbKPI) {
          res.json(dbKPI);
        })
        .catch(function(err) {
          res.json(err);
        });
    })