const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const bluebird = require("bluebird");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.Promise = bluebird;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Scorecardt",
  { promiseLibrary: bluebird }
);

// db.Scorecardt.create({ name: "kpis" })
//   .then(function(kpis) {
//     // If saved successfully, print the new Library document to the console
//     console.log(kpis);
//   })
//   .catch(function(err) {
//     // If an error occurs, print it to the console
//     console.log(err.message);
//   });

// Start the API server...
app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
