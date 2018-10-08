const db = require("../models");

getToken = headers => {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

// Defining methods for the plantsController
module.exports = {
  createContactMessage: (req, res) => {
    const token = getToken(req.headers);
    if (token && req.body.username && req.body.subject && req.body.body) {
      db.Contact.create(req.body)
        .then(dbModel => {
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    } else {
      res.status(403).send({ success: false, msg: "Message not sent" });
    }
  }
};
