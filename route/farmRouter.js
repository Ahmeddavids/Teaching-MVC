const express = require('express');
const { register, getAll, getOne } = require('../controller/farmController');

const router = express.Router();

router.post('/register-animal', register);

router.get('/all-animals', getAll);

router.get('/animal/:id', getOne);

module.exports = router
