const express = require('express');
const {
    getUserDetails,
    getUserItemDetails
} = require('../controllers/user');
const router = express.Router();
const { protect, authorize } = require('../middlewares/auth');
const advanceResults = require('../middlewares/advanceResults');

router.route('/id').get(advanceResults(getUserItemDetails));

module.exports = router;
