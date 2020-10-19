var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().sort({ createdAt: -1 })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
