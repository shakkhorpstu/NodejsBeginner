var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');

router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.store);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.destroy);
router.post('/upload/file', UserController.fileUpload);

module.exports = router;
