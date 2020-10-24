var express = require('express');
var router = express.Router();
var usersRouter = require('./users');
const MailController = require('../controllers/MailController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/send-mail', MailController.sendMail);
router.use('/users', usersRouter);

module.exports = router;
