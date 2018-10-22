const router = require("express").Router();
const path = require("path");
const fileUpload= require("express-fileupload");
const csvFilePath = path.join(__dirname, "../../assets/data.csv");

router.route("/").post('/upload', (req, res, next) => {
  console.log(req);
  let csvFile = req.files.file;

  csvFile.mv(`${__dirname}/client/${req.body.filename}.csv`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `client/${req.body.filename}.csv`});
  });

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = router;