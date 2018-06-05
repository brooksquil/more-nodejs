var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form Validation', success: false, errors: req.session.errors});
  req.session.errors = null;
});

router.post('/submit', function(req, res, next) {
  // Check validity
  req.check('email', 'invalid email entered').isEmail();
  req.check('password', 'invalid password').isLength({min: 4}).equals(req.body.confirmPassword);

  var errors = req.validationErrors();
});


module.exports = router;
