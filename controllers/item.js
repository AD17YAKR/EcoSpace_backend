const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const Item = require('../models/Item');

//@desc     Add new item
//@routes   POST /api/v1/item
//@access   Private
exports.addItem = asyncHandler(async (req, res, next) => {
    const { itemName, estimatedPrice, itemAge, description } =
        req.body;
    //Add user to req.body
    const user = req.user.id;

    // Add Item
    const item = await Item.create({
        itemName,
        estimatedPrice,
        itemAge,
        description,
        user
    });

    res.status(200).json({
        success: true,
        data: item
    });
});

//@desc     Get all items
//@routes   GET /api/v1/item
//@access   Public
exports.getItems = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advanceResults);
});

//@desc     Get items by id
//@routes   GET /api/v1/item/:id
//@access   Public
exports.getItemById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const item = await Item.findById(id);
    if (!item) {
        return;
        next(error);
    }

    res.status(200).json({
        success: true,
        data: item
    });
});

//@desc     Update Item by id
//@routes   PUT /api/v1/item/:id
//@access   Private
exports.updateItemById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    let item = await Item.findById(id);
    if (!item) {
        return;
        next(error);
    }

    item = await Item.findOneAndUpdate(id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: item
    });
});

//@desc     Delete Item by id
//@routes   PUT /api/v1/item/:id
//@access   Private
exports.deleteItemById = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    let item = await Item.findById(id);
    if (!item) {
        return;
        next(error);
    }

    item = await Item.findOneAndUpdate(
        id,
        { isDelete: true },
        {
            new: true,
            runValidators: true
        }
    );

    res.status(200).json({
        success: true,
        data: item
    });
});
