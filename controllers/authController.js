const db = require("../models");
const settings = require("../config/settings");
var jwt = require("jsonwebtoken");

// Defining methods for the authController
module.exports = {
  save: (req, res) => {
    if (
      !req.body.firstname ||
      !req.body.lastname ||
      !req.body.username ||
      !req.body.password
    ) {
      res.json({
        success: false,
        msg: "Please pass all requested information."
      });
    } else {
      var newUser = new db.User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.password
      });
      // save the user
      newUser.save(err => {
        if (err) {
          return res.json({
            success: false,
            msg: "That email address is already registered."
          });
        }
        res.json({ success: true, msg: "Successfully created new user." });
      });
    }
  },
  getUser: function(req, res) {
    db.User.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: (req, res) => {
    db.User.findOne(
      {
        username: req.body.username
      },
      (err, user) => {
        if (err) throw err;

        if (!user) {
          res.status(401).send({
            success: false,
            msg: "Authentication failed. User not found."
          });
        } else {
          //check if password matches
          user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch && !err) {
              //if user is found and password is right create a token
              var token = jwt.sign(user.toJSON(), settings.secret);
              //return the information including token as JSON
              res.json({ success: true, token: "JWT " + token });
            } else {
              res.status(401).send({
                success: false,
                msg: "Authentication failed. Wrong password."
              });
            }
          });
        }
      }
    );
  }
};
