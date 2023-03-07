const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    estimatedPrice: {
        type: Number,
        required: true
    },
    itemAge: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required:true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Item', ItemSchema);
