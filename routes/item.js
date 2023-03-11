const express = require('express');
const {
    addItem,
    getItems,
    getItemById,
    updateItemById,
    deleteItemById
} = require('../controllers/item');
const Item = require('../models/Item');
const router = express.Router();
const { protect, authorize } = require('../middlewares/auth');
const advanceResults = require('../middlewares/advanceResults');

router
    .route('/')
    .post(protect, authorize('user'), addItem)
    .get(advanceResults(Item), getItems);

router
    .route('/:id')
    .get(getItemById)
    .put(protect, updateItemById)
    .delete(protect, deleteItemById);

module.exports = router;
