var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var product = ('../seeder/products');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');
});

//discount calculation
function priceCalculation() {
  var users = document.getElementById("first_name").value;
  var userId = document.getElementById("userId").value;
  var employee = document.getElementById("employee").value;
  var totalQty = document.getElementById("totalQty").value;    
  var price = document.getElementById("price").value;
  var membershipPeriod = abs(Date.now() - registrationDate);
  var total = totalQty * price;
 
  var discountedTotal = 0;

    //if there is more than products in the user cart it is a grocery
    if (totalQty < 5) {
                  
          DiscountedTotal = total - (abs(total/100) * 5);
      } 
    //5 or less products not a grocery
    else {
      //employee
      if  (employee == true)
          discountedTotal = total - (total * 0.3);
      //affiliate
      else if (affiliate == true)
      discountedTotal = total - (total * 0.01);
      //loyal customer
      else if ((membershipPeriod))
      discountedTotal = total - (total * 0.05);
      //no discount
      else 
      discountedTotal = total; 
      };

  
 
  
  } // end function priceCalculation(); 
 
module.exports = app;
