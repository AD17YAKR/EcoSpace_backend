const express = require('express');
const {
    registerSwapper,
    loginSwapper
} = require('../controllers/auth');

const router = express.Router();

router
    .post('/register', registerSwapper)
    .post('/login', loginSwapper);

module.exports = router;
