const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

const indexRequest = require('../middlewares/request/indexRequest');
const showRequest = require('../middlewares/request/showRequest');
const storeRequest = require('../middlewares/request/storeRequest');

//rotte du CRUD

// index
router.get('/', indexRequest, postController.index);

// show
router.get('/:id', showRequest, postController.show);

// store
router.post('/', storeRequest, postController.store);

// update
router.put('/:id', postController.update);

// modify
router.patch('/:id', postController.modify);

// destroy
router.delete('/:id', postController.destroy);

module.exports = router;