var express = require('express');
var router = express.Router();
let fibonacci = require('../lib/fibonacci');

const TITLE = 'Online Fibonacci Calculator';
const SUBTITLE = '(for demo purposes)';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: TITLE, subtitle: SUBTITLE });
});

router.post('/calcFib', function(req, res, next){
	let series = fibonacci(req.body.fibIdx);
	res.render('index', { title: TITLE, subtitle: SUBTITLE, fibidx: series.data , error: series.error});
	//res.end(req.body.fibIdx);
});

module.exports = router;
