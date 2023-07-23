const express = require('express');

const router  = express.Router(); 

const userController = require('../controllers/user');

router.get('/',userController.getDetails);

router.post('/create', userController.postDetails);

router.get('/data', userController.showData);

router.get('/delete-data', userController.deleteData);

module.exports = router;