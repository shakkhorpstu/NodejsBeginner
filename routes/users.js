var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');
const authMiddleware = require('../controllers/middleware/authenticated');

router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.store);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);
router.post('/upload/file', UserController.fileUpload);
router.post('/demo-login', UserController.demoLogin);
router.get('/authenticated-access/url/check', authMiddleware.verify, UserController.authenticatedMethod);



module.exports = router;
