var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log('POST data received:');
  console.log(req.body);

  res.send('POST received!');
});

module.exports = router;