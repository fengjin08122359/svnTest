var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs  = require('ejs');
var file = require('./tools/file');

var indexRouter = require('./routes/index');
var configRouter = require('./routes/config');
var svnRouter = require('./routes/svn');
var zipRouter = require('./routes/zip');
var msgRouter = require('./routes/postMsg');
var mongoose = require('./tools/mongoose');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.engine('html',ejs.__express);
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/index', urlencodedParser, indexRouter);
app.use('/config', urlencodedParser, configRouter);
app.use('/svn', urlencodedParser, svnRouter);
app.use('/zip', urlencodedParser, zipRouter);
app.use('/postMsg', urlencodedParser, msgRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
  res.end(err.stack);
});
//mongoose.init();
file.init();
module.exports = app;
