var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var sinhviens = ['Thor','Hulk','Ana','Alex'];
  var year = 2022;

  res.render('index', {
    title: 'Express',
    years: year,
    students: sinhviens
  });
});
router.get('/news', function(req, res, next) {
  res.render('news');
});
module.exports = router;
