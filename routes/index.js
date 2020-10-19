var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  const user = new User({
    first_name: 'Mahmud',
    last_name: 'Hasan',
    profile: {
      image: 'https://demo.png',
      profession: 'Software Developer'
    }
  });
  user.save().then(response => console.log(response)).catch(err => console.log(err));
  res.render('index', { title: 'Express' });
});

module.exports = router;
