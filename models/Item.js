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
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    isDelete: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Item', ItemSchema);
