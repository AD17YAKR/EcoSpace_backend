const crypto = require('crypto');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const Item = require('../models/Item');

//@desc     Add new item
//@routes   POST /api/v1/item/add
//@access   Private
exports.addItem = asyncHandler(async (req, res, next) => {
    const { itemName, estimatedPrice, itemAge, description } =
        req.body;

    //Add Item
    const item = await Item.create({
        itemName,
        estimatedPrice,
        itemAge,
        description
    });

    res.status(200).json({
        success: true,
        data: item
    });
});
